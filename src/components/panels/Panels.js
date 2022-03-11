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
            <Link to="/404">
              404 Page Not Found
              <IoChevronForward size="1rem"/>
            </Link>
          </main>
        </PanelStyles>
      </>
    )
}

export default Panels