import React from 'react';

import { ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles'
import { Label, Input, TextArea } from "ui/forms"
import { SubmitButton } from "ui/buttons"
import { ProductImageDropBox } from "../ProductImageDropBox"

const defaults = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor.',
  name: 'Ray-Ban',
  price: 19999
}

function ProductDataEntryForm ({children, handleSubmit, handleProductName, handleProductPrice, setProductImage, handleProductDescription, def, name, description, price, image, ...props})  {
  return (
    <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>
      <ProductImage>
        <Label fs="16px" fw="700" margin="0 0 5px 0">Glasses Image</Label>
        <ProductImageDropBox setProductImage={setProductImage} />
      </ProductImage>

      <fieldset>
        <ProductName>
          <Label htmlFor="brand" fs="16px" fw="700" margin="0 0 5px 0">Brand</Label>
          <Input id="brand" onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30} shadow="0 0 2px 1px #16324f30" bbottom="1px solid transparent" fshadow="0 0 2px 1px #16324f30, inset 0 0 6px #16324f30" margin="0" placeholder={def?defaults.name:null} defaultValue={def?null:name} />
        </ProductName>
  
        <ProductPrice>
          <Label htmlFor="price" fs="16px" fw="700" margin="0 0 5px 0">Price</Label>
          <Input id="price" onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8} shadow="0 0 2px 1px #16324f30" bbottom="1px solid transparent" fshadow="0 0 2px 1px #16324f30, inset 0 0 6px #16324f30" margin="0" placeholder={def?defaults.price:null} defaultValue={def?null:price} />
        </ProductPrice>
      </fieldset>

      <ProductDescription>
        <Label htmlFor="description" fs="16px" fw="700" margin="0 0 5px 0">Description</Label>
        <TextArea id="description" onChange={(e)=>handleProductDescription(e.target.value.trim())} rows={7} shadow="0 0 2px 1px #16324f30" bbottom="1px solid transparent" fshadow="0 0 2px 1px #16324f30, inset 0 0 6px #16324f30" margin="0" placeholder={def?defaults.description:null} defaultValue={def?null:description} />
      </ProductDescription>

      <div>
        { def?
          <SubmitButton type="submit" radius="5px" fw="700" padding="10px 0" width="100%" margin="20px 0 0 0">Add Product</SubmitButton>
          :
          <SubmitButton type="submit" radius="5px" fw="700" padding="10px 0" width="100%" margin="20px 0 0 0">Save Changes</SubmitButton>
        }
      </div>

    </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm