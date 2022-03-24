import React from 'react'

import {IoAddCircle} from 'react-icons/io5'

import {AddProductButton} from 'ui/buttons'
import {PanelStyles, PanelHeader, PanelBody} from './styles'

function AllProductsPanel ({title, ...props}) {
    return (
      <>
        <PanelStyles>
          <PanelHeader>
            <h1>{title || "Display Panel"}</h1>
          </PanelHeader>
          <PanelBody>
            
          </PanelBody>
        </PanelStyles>
      </>
    )
}

export default AllProductsPanel