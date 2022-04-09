import { useState } from 'react'
import { remove, ref } from 'firebase/database'
import { db } from 'libs/firebase'

function useDeleteProduct() {
  const key = sessionStorage.getItem('key')
  const [loading, setLoading] = useState(false)
  const deleteProduct = function() {
    setLoading(true)
    const productRef = ref(db, 'products/' + key)
    let results = Promise.all([productRef])
    results.then(()=>{
      remove(productRef)
    })
    .then(()=>{
      setLoading(false)
    })
  }

  return [loading, deleteProduct]
}

export { useDeleteProduct }