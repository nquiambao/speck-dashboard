import React from 'react'

import { AddProduct } from "components/products/widgets/AddProduct"
import {PanelStyles, PanelHeader, PanelBody} from './styles'

function AddProductPanel ({title, ...props}) {
  return (
    <>
      <PanelStyles>
        <PanelHeader>
          <h1>{title || "Display Panel"}</h1>
        </PanelHeader>
        <PanelBody>
          <AddProduct/>
        </PanelBody>
      </PanelStyles>
    </>
  )
}

export default AddProductPanel