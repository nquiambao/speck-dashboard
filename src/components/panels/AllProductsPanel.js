import { React } from 'react'
import { ProductPreview } from "components/products/ProductPreview"
import { useGetAllProducts } from "hooks/useGetAllProducts"
import {PanelStyles, PanelHeader, PanelBody, AllProductsStyles} from './styles'

function AllProductsPanel ({title, ...props}) {
  const productData = useGetAllProducts()
  
  return (
    <>
      <PanelStyles>
        <PanelHeader>
          <h1>{title || "Display Panel"}</h1>
        </PanelHeader>
        <PanelBody>
          
          <AllProductsStyles>
            { productData ?
            productData.map(product =>
              <ProductPreview
                key={product.uid}
                productName={product.productName}
                productPrice={product.productPrice}
                productImage={{previewImage:product.imageUrl, file:null}} productDescription={product.productDescription}
                uid={product.uid}
                padding="0"
                mwidth="300px"
                buttons={true}
              />)
            :
            null }
          </AllProductsStyles>
        </PanelBody>
      </PanelStyles>
    </>
  )
}

export default AllProductsPanel