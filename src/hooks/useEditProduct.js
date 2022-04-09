import { useState } from 'react'
import { ref, update } from 'firebase/database'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from 'libs/firebase'

function useEditProduct() {
  const key = sessionStorage.getItem('key')
  const [loading, setLoading] = useState(false)
  const productLoader = async function(productData, productImage, imageStoragePath) {
    const imageFile = productImage.file
    setLoading(true)
    const dataRef = ref(db, 'products')
    let storagePath, imageRef, uploadRef, imageUrl
    if (imageFile == null) {
      storagePath = imageStoragePath
      imageUrl = productImage.previewImage
    } else {
      imageRef = await storageRef(storage, `images/products/${imageFile.name}`)
      uploadRef = await uploadBytes(imageRef, imageFile)
      imageUrl = await getDownloadURL(imageRef)
      storagePath = uploadRef.metadata.fullPath
    }

    const updateData = {
      key: key,
      ...productData,
      imageUrl,
      imageStoragePath:storagePath,
      uid:key
    }

    const updates = {}
    updates[key] = updateData
    
    let results = Promise.all([dataRef, imageRef, uploadRef, imageRef])

    results.then(()=>{
      update(dataRef, updates)
    })

    .then(()=>{
      setLoading(false)
    })
  }

  return [loading, productLoader]
}

export { useEditProduct }