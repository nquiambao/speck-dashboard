import { useEffect, useState } from 'react'
import { ref, get } from 'firebase/database'
import { db } from 'libs/firebase'

function useGetAllProducts() {
  const [productData, setProductData] = useState(null)
  useEffect(()=>{
    async function getProducts () {
      const productRef = ref(db, 'products/')
      const productSnapshot = await get(productRef)
      const data = productSnapshot.val()
      setProductData(Object.values(data))
    }

    getProducts()
  }, [])

  return productData
}

export { useGetAllProducts }