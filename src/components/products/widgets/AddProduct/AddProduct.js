import React, { useState } from 'react'

import { useNumberFormat } from 'hooks/useNumberFormat'
import { useAddNewProduct } from 'hooks/useAddNewProduct'
import { ProductEditor } from "components/products/ProductEditor"
import ProductPreview from 'assets/images/glasses.jpg';
import { AddProductStyles } from './styles'

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('100.00')
  const [productDescription, setProductDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor.')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct()
  const formatter = useNumberFormat()

  function handleProductName(name) {
    setProductName(name)
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price))
  }

  function handleProductDescription(description) {
    setProductDescription(description)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
  }

  if (isWriting) {
    return (
      <>
        <h1>Editor Feedback Component</h1>
      </>
    )
  } else {
    return (
      <AddProductStyles  {...props}>
        <ProductEditor
          productName={productName}
          productPrice={productPrice}
          productImage={productImage}
          productDescription={productDescription}
          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          setProductImage={setProductImage}
          handleProductDescription={handleProductDescription}
          handleSubmit={handleSubmit}
        />
      </AddProductStyles>
    )
  }
}

export default AddProduct