import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetSingleProduct } from "hooks/useGetSingleProduct"
import { useDeleteProduct } from 'hooks/useDeleteProduct'
import { EditorFeedback } from 'components/products/EditorFeedback'
import { ProductPreview } from 'components/products/ProductPreview'
import { Button } from 'ui/buttons'
import {DeleteProductStyles, ButtonStyles, PreviewContainer} from './styles'

function DeleteProduct ({children, ...props})  {
  const navigate = useNavigate()
  const key = sessionStorage.getItem('key')

  const getProduct = useGetSingleProduct
  const data = getProduct('products/' + sessionStorage.getItem('key'))
  let [productName, setProductName] = useState(null)
  let [productPrice, setProductPrice] = useState(null)
  let [productDescription, setProductDescription] = useState(null)
  let [productImage, setProductImage] = useState({previewImage:null, file:null})

  useEffect(()=>{
    data.then(value=>setProductName(value.productName))
    data.then(value=>setProductPrice(value.productPrice))
    data.then(value=>setProductDescription(value.productDescription))
    data.then(value=>setProductImage({previewImage:value.imageUrl, file:null}))
  }, [])

  const [isDeleting, setIsDeleting] = useState(false)
  const [loading, deleteProduct] = useDeleteProduct()

  function onDeleteRequest(e) {
    e.preventDefault()
    setIsDeleting(true)
    deleteProduct()
    sessionStorage.clear()
  }

  function onReturnRequest(e) {
    e.preventDefault()
    sessionStorage.clear()
    navigate("/dashboard/all")
  }

  if (isDeleting) {
    return (
      <EditorFeedback status={loading} writeCompleted={setIsDeleting} state='delete'/>
    )
  } else {
    return (
      <DeleteProductStyles  {...props}>
        <p className="confirm">Are you sure you want to delete this product?</p>
        <PreviewContainer>
          <ProductPreview
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            productDescription={productDescription}
            buttons={false}
          />
        </PreviewContainer>
        <ButtonStyles>
            <Button onClick={onDeleteRequest} bg="#ff624d" color="#fff" hoverbg="#c42b07" width="fit-content" padding="1rem 5rem">Delete</Button>
            <Button onClick={onReturnRequest} bg="#3e92cc" color="#fff" hoverbg="#295b82" width="fit-content" padding="1rem 5rem">Go Back</Button>
          </ButtonStyles>
        
  
      </DeleteProductStyles>
    )
  }
  
}

export default DeleteProduct