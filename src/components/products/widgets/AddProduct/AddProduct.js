import React, { useState } from 'react'

import { useNumberFormat } from 'hooks/useNumberFormat'
import { useAddNewProduct } from 'hooks/useAddNewProduct'
import { ProductEditor } from "components/products/ProductEditor"
import { AddProductStyles } from './styles'
import { EditorFeedback } from 'components/products/EditorFeedback'
import ProductPreview from 'assets/images/default.jpg';

const defaults = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor.',
  name: 'Ray Ban',
  price: 199.99
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDescription, setProductDescription] = useState(defaults.description)
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
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
  }

  if (isWriting) {
    return (
      <EditorFeedback status={loading} writeCompleted={setIsWriting} state='write' />
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
          buttons={false}
          uid={null}
          def={true}
        />
      </AddProductStyles>
    )
  }
}

export default AddProduct