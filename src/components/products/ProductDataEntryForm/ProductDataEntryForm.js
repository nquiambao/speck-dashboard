import React from 'react';

import { ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles'
import { Label, Input, TextArea } from "ui/forms"
import { SubmitButton } from "ui/buttons"
import { ProductImageDropBox } from "../ProductImageDropBox"

function ProductDataEntryForm ({children, handleSubmit, handleProductName, handleProductPrice, setProductImage, handleProductDescription, ...props})  {
  return (
    <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>
      <ProductImage>
        <Label>Product Image</Label>
        <ProductImageDropBox setProductImage={setProductImage} />
      </ProductImage>

      <fieldset>
        <ProductName>
          <Label>Product Name</Label>
          <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30} shadow="0 0 2px 1px #16324f30" bbottom="1px solid transparent" fshadow="0 0 2px 1px #16324f30, inset 0 0 6px #16324f30"/>
        </ProductName>
  
        <ProductPrice>
          <Label>Product Price</Label>
          <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8} shadow="0 0 2px 1px #16324f30" bbottom="1px solid transparent" fshadow="0 0 2px 1px #16324f30, inset 0 0 6px #16324f30"/>
        </ProductPrice>
      </fieldset>

      <ProductDescription>
        <Label>Product Description</Label>
        <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} rows={6} shadow="0 0 2px 1px #16324f30" bbottom="1px solid transparent" fshadow="0 0 2px 1px #16324f30, inset 0 0 6px #16324f30"/>
      </ProductDescription>

      <div>
        <SubmitButton type="submit">Add Product</SubmitButton>
      </div>

    </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm