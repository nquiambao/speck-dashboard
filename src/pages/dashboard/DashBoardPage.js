import React, { useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate, Outlet } from 'react-router-dom'
import { auth } from 'libs/firebase'

import {AppBar} from 'components/appbar'
import {SideBar} from 'components/sidebar'
import {DashBoardStyles} from './styles'

function DashBoardPage (props) {
  const [isUser, setIsUser] = useState(false)
  const navigate = useNavigate()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true)
    } else {
      setIsUser(false)
      navigate('/')
    }
  })
  
  if (isUser) {
    return (
      <>
        <AppBar/>
        <DashBoardStyles>
          <SideBar/>
          <Outlet/>
        </DashBoardStyles>
      </>
    )
  } else {
    return null
  }
}

export default DashBoardPage