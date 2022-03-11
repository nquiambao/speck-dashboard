import React from 'react'
import {Link} from 'react-router-dom'

import {IoMailSharp, IoNotifications, IoSettingsSharp, IoAppsSharp} from 'react-icons/io5'

import {AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup, AppBarContainer} from './styles'
import {IconButton} from './../../ui/buttons'
import {Brand} from '../branding/'

function AppBar  (props){
  return( 
    <AppBarStyles bg="#9fc2e3">
      <AppBarContainer>
        <AppBarItems>
          <AppBarItem>
            <Link to="/dashboard">
              <Brand size="1.2rem" iconSize="2rem" />
            </Link>
          </AppBarItem>
          <AppBarItemGroup>
            <IconButton>
              <IoMailSharp size="1.5rem"/>
            </IconButton>
            <IconButton>
              <IoNotifications size="1.5rem"/>
            </IconButton>
            <IconButton>
              <IoSettingsSharp size="1.5rem"/>
            </IconButton>
            <IconButton>
              <IoAppsSharp size="1.5rem"/>
            </IconButton>
            <IconButton>
              <img src="https://avatars.dicebear.com/api/initials/se.svg?radius=50" width="48" alt="avatar" />
            </IconButton>
          </AppBarItemGroup>
        </AppBarItems>
      </AppBarContainer>
    </AppBarStyles>
  )
}

export default AppBar