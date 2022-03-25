import React from 'react'

import { EditProduct } from "components/products/widgets/EditProduct"
import {PanelStyles, PanelHeader, PanelBody} from './styles'

function EditProductPanel ({title, ...props}) {
  return (
    <>
      <PanelStyles>
        <PanelHeader>
          <h1>{title || "Display Panel"}</h1>
        </PanelHeader>
        <PanelBody>
          <EditProduct/>
        </PanelBody>
      </PanelStyles>
    </>
  )
}

export default EditProductPanel