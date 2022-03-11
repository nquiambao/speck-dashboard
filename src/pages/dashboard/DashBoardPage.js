import React from 'react';

import {DashBoardStyles} from './styles'
import {AppBar} from '../../components/appbar'
import {SideBar} from '../../components/sidebar'
import {Panels} from '../../components/panels'

function DashBoardPage (props) {
  return (
  <>
    <AppBar/>
    <DashBoardStyles>
      <SideBar/>
      <Panels/>
    </DashBoardStyles>
  </>
  )
}

export default DashBoardPage