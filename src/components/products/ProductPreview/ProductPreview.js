import React from 'react';
import { useNavigate } from 'react-router-dom'

import { Button } from 'ui/buttons'
import {ProductPreviewStyles, ProductCard, ProductImage, ProductName, ProductPrice, ProductDescription, ProductCardContainer} from './styles'

function ProductPreview ({children, productName, productPrice, productImage, productDescription, buttons, uid, ...props}) {
  const navigate = useNavigate()
  function onEditRequest(e) {
    e.preventDefault()
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    navigate("/dashboard/edit")
  }

  function onDeleteRequest(e) {
    e.preventDefault()
    const key = e.target.dataset.key
    sessionStorage.setItem('key', key)
    navigate("/dashboard/delete")
  }

  return (
    <ProductPreviewStyles {...props}>
      <ProductCard>
        <ProductImage>
          <img src={productImage.previewImage} alt="speck glasses" width="300" height="201" />
        </ProductImage>
        <ProductCardContainer>
          <div>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDescription}</ProductDescription>
          </div>
          {buttons ?
          <div className="buttons">
            <Button
              onClick={onEditRequest}
              data-key={uid}
              border="1px solid #2a628f70" spacing="1px" ttransform="uppercase" padding="10px 0" hoverbg="#9fc2e3" hovercolor="#2a628f" hovershadow="inset 0 0 6px #16324f40"
            >Edit</Button>
            <Button
              onClick={onDeleteRequest}
              data-key={uid}
              border="1px solid #2a628f70" spacing="1px" ttransform="uppercase" padding="10px 0" hoverbg="#9fc2e3" hovercolor="#2a628f" hovershadow="inset 0 0 6px #16324f40"
            >Delete</Button>
          </div>
          :
          null}
        </ProductCardContainer>
      </ProductCard>

    </ProductPreviewStyles>
  )
}

export default ProductPreview