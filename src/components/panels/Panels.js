import React from 'react'
import { Link } from 'react-router-dom'

import {IoAddCircle, IoChevronForward} from 'react-icons/io5'
import {PanelStyles} from './styles'
import {AddProductButton} from './../../ui/buttons'

function Panels (props) {
    return (
      <>
        <PanelStyles>
          <header>
            <h1>Product Listings</h1>
            <AddProductButton>
              <IoAddCircle size="1.4rem"/>
              Add Product
            </AddProductButton>
          </header>
          <main>
          </main>
        </PanelStyles>
      </>
    )
}

export default Panels