import React, { useState, useEffect } from 'react'

import { useGetSingleProduct } from "hooks/useGetSingleProduct"
import { useNumberFormat } from 'hooks/useNumberFormat'
import { useEditProduct } from 'hooks/useEditProduct'
import { ProductEditor } from "components/products/ProductEditor"
import { EditorFeedback } from 'components/products/EditorFeedback'
import { EditProductStyles } from './styles'

function EditProduct ({children, ...props})  {
  const getProduct = useGetSingleProduct
  const formatter = useNumberFormat()
  const data = getProduct('products/' + sessionStorage.getItem('key'))
  let [productName, setProductName] = useState(null)
  let [productPrice, setProductPrice] = useState(null)
  let [productDescription, setProductDescription] = useState(null)
  let [productImage, setProductImage] = useState({previewImage:null, file:null})
  let [imageStoragePath, setImageStoragePath] = useState(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [loading, productLoader] = useEditProduct()

  useEffect(()=>{
    data.then(value=>setProductName(value.productName))
    data.then(value=>setProductPrice(value.productPrice))
    data.then(value=>setProductDescription(value.productDescription))
    data.then(value=>setProductImage({previewImage:value.imageUrl, file:null}))
    data.then(value=>setImageStoragePath(value.imageStoragePath))
  }, [])

  function handleName(name) {
    setProductName(name)
  }
  
  function handlePrice(price) {
    setProductPrice(formatter(price))
  }

  function handleDescription(description) {
    setProductDescription(description)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsUpdating(true)
    productLoader(productData, productImage, imageStoragePath)
  }

  if (isUpdating) {
    return (
      <EditorFeedback status={loading} writeCompleted={setIsUpdating} state='edit'/>
    )
  } else {
    return (
      <>
      <EditProductStyles>
        { data ?
        <ProductEditor
          productName={productName}
          productPrice={productPrice}
          productImage={productImage}
          productDescription={productDescription}
          handleProductName={handleName}
          handleProductPrice={handlePrice}
          setProductImage={setProductImage}
          handleProductDescription={handleDescription}
          handleSubmit={handleSubmit}
          buttons={false}
          uid={null}
          def={false}
        />
        :
        null }
      </EditProductStyles>
      </>
    )
  }
}

export default EditProduct