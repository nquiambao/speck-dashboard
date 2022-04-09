import React from 'react';

import { ProductDataEntryForm } from "./../ProductDataEntryForm"
import { ProductPreview } from "./../ProductPreview"
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, productName, productPrice, productImage, productDescription, handleSubmit, handleProductName, handleProductPrice, setProductImage, handleProductDescription, buttons, def, ...props})  {
  return (
    <ProductEditorStyles  {...props}>
      <ProductDataEntryForm
        handleProductName={handleProductName}
        handleProductPrice={handleProductPrice}
        setProductImage={setProductImage}
        handleProductDescription={handleProductDescription}
        handleSubmit={handleSubmit}
        def={def}
        name={productName}
        price={productPrice}
        description={productDescription}
        image={productImage}
      />
      <ProductPreview
        productName={productName}
        productPrice={productPrice}
        productImage={productImage}
        productDescription={productDescription}
        buttons={buttons}
      />

    </ProductEditorStyles>
  )
}

export default ProductEditor