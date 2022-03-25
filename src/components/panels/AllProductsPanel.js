import React from 'react'

import { ProductPreview } from "components/products/ProductPreview"
import defaultImage1 from 'assets/images/default.jpg'
import defaultImage2 from 'assets/images/default-2.jpg'
import {PanelStyles, PanelHeader, PanelBody, AllProductsStyles} from './styles'

function AllProductsPanel ({title, ...props}) {
  const product1 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor.',
    name: 'Ray Ban',
    price: 199.99,
    image: {previewImage:defaultImage1, file:null}
  }

  const product2 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut tellus feugiat, rhoncus leo finibus, tempus urna. Sed vehicula tortor et mi sodales suscipit eu molestie magna. Mauris quis dignissim nulla. Suspendisse potenti.',
    name: 'Oakley',
    price: 254.00,
    image: {previewImage:defaultImage2, file:null}
  }

  const product3 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo velit, elementum eget arcu et, scelerisque aliquet justo. Cras eget lacinia quam.',
    name: 'Versace',
    price: 415.99,
    image: {previewImage:defaultImage1, file:null}
  }

  const product4 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor.',
    name: 'Coach',
    price: 409.99,
    image: {previewImage:defaultImage2, file:null}
  }

  const product5 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut tellus feugiat, rhoncus leo finibus, tempus urna. Sed vehicula tortor et mi sodales suscipit eu molestie magna. Mauris quis dignissim nulla. Suspendisse potenti.',
    name: 'Prada',
    price: 590.00,
    image: {previewImage:defaultImage1, file:null}
  }

  const product6 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo velit, elementum eget arcu et, scelerisque aliquet justo. Cras eget lacinia quam.',
    name: 'Guess',
    price: 185.00,
    image: {previewImage:defaultImage2, file:null}
  }

  const product7 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor.',
    name: 'Ray Ban',
    price: 240.00,
    image: {previewImage:defaultImage1, file:null}
  }

  const product8 = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut tellus feugiat, rhoncus leo finibus, tempus urna. Sed vehicula tortor et mi sodales suscipit eu molestie magna. Mauris quis dignissim nulla. Suspendisse potenti.',
    name: 'Coach',
    price: 360.99,
    image: {previewImage:defaultImage2, file:null}
  }

  return (
    <>
      <PanelStyles>
        <PanelHeader>
          <h1>{title || "Display Panel"}</h1>
        </PanelHeader>
        <PanelBody>
          <AllProductsStyles>
            <ProductPreview
              productName={product1.name}
              productPrice={product1.price}
              productImage={product1.image}
              productDescription={product1.description}
              padding="0"
              mwidth="300px"
            />
            <ProductPreview
              productName={product2.name}
              productPrice={product2.price}
              productImage={product2.image}
              productDescription={product2.description}
              padding="0"
              mwidth="300px"
            />
            <ProductPreview
              productName={product3.name}
              productPrice={product3.price}
              productImage={product3.image}
              productDescription={product3.description}
              padding="0"
              mwidth="300px"
            />
            <ProductPreview
              productName={product4.name}
              productPrice={product4.price}
              productImage={product4.image}
              productDescription={product4.description}
              padding="0"
              mwidth="300px"
            />
            <ProductPreview
              productName={product5.name}
              productPrice={product5.price}
              productImage={product5.image}
              productDescription={product5.description}
              padding="0"
              mwidth="300px"
            />
            <ProductPreview
              productName={product6.name}
              productPrice={product6.price}
              productImage={product6.image}
              productDescription={product6.description}
              padding="0"
              mwidth="300px"
            />
            <ProductPreview
              productName={product7.name}
              productPrice={product7.price}
              productImage={product7.image}
              productDescription={product7.description}
              padding="0"
              mwidth="300px"
            />
            <ProductPreview
              productName={product8.name}
              productPrice={product8.price}
              productImage={product8.image}
              productDescription={product8.description}
              padding="0"
              mwidth="300px"
            />
          </AllProductsStyles>
        </PanelBody>
      </PanelStyles>
    </>
  )
}

export default AllProductsPanel