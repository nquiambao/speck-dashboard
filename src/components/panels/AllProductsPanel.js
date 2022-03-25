import React from 'react'

import { ProductPreview } from "components/products/ProductPreview"
import defaultImage from 'assets/images/default.jpg';
import {PanelStyles, PanelHeader, PanelBody} from './styles'

function AllProductsPanel ({title, ...props}) {
  const defaults = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor.',
    name: 'Ray Ban',
    price: 199.99,
    image: {previewImage:defaultImage, file:null}
  }
  return (
    <>
      <PanelStyles>
        <PanelHeader>
          <h1>{title || "Display Panel"}</h1>
        </PanelHeader>
        <PanelBody>
          <ProductPreview
            productName={defaults.name}
            productPrice={defaults.price}
            productImage={defaults.image}
            productDescription={defaults.description}
            padding="0"
            mwidth="300px"
          />
        </PanelBody>
      </PanelStyles>
    </>
  )
}

export default AllProductsPanel