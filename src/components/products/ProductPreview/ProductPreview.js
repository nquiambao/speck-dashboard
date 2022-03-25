import React from 'react';

import {ProductPreviewStyles, ProductCard, ProductImage, ProductInfo, ProductName, ProductPrice, ProductDescription} from './styles'

function ProductPreview ({children, productName, productPrice, productImage, productDescription, ...props})  {
  return (
    <ProductPreviewStyles {...props}>
      <ProductCard>
        <ProductImage>
          <img src={productImage.previewImage} alt="speck glasses" width="320" height="184" />
        </ProductImage>
        <ProductInfo>
          <ProductName>{productName}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductDescription>{productDescription}</ProductDescription>
        </ProductInfo>
      </ProductCard>

    </ProductPreviewStyles>
  )
}

export default ProductPreview