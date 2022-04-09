import React from 'react'
import { Link } from 'react-router-dom'

import { DeleteProduct } from "components/products/widgets/DeleteProduct"
import {PanelStyles, PanelHeader, PanelBody} from './styles'

function DeleteProductPanel ({title, ...props}) {
  const key = sessionStorage.getItem('key')
  if (key == null) {
    return (
      <>
        <PanelStyles>
          <PanelHeader>
            <h1>{title || "Display Panel"}</h1>
          </PanelHeader>
          <PanelBody>
            No product selected. <Link to="/dashboard/all">Go back</Link> to select a product to remove.
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
          <DeleteProduct/>
        </PanelBody>
      </PanelStyles>
    </>
  )
  }
}

export default DeleteProductPanel