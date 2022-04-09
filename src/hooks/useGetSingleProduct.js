import { ref, get } from 'firebase/database'
import { db } from 'libs/firebase'

async function useGetSingleProduct(path) {
  const productRef = ref(db, path)
  const productSnapshot = await get(productRef)
  return productSnapshot.val()
}

export { useGetSingleProduct }