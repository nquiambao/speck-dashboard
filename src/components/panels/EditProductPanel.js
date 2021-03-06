import React from 'react'
import { Link } from 'react-router-dom'

import { EditProduct } from "components/products/widgets/EditProduct"
import {PanelStyles, PanelHeader, PanelBody} from './styles'

function EditProductPanel ({title, ...props}) {
  const key = sessionStorage.getItem('key')
  if (key == null) {
    return (
      <>
        <PanelStyles>
          <PanelHeader>
            <h1>{title || "Display Panel"}</h1>
          </PanelHeader>
          <PanelBody>
            No product selected. <Link to="/dashboard/all">Go back</Link> to select a product to edit.
          </PanelBody>
        </PanelStyles>
      </>
    )
  } else {
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
}

export default EditProductPanel