import React from 'react'
import {useNavigate} from 'react-router-dom'

import {IoHome, IoReceipt, IoLayers, IoGrid, IoStatsChart, IoStarHalf, IoPricetags, IoMegaphone, IoBagHandle, IoCar, IoAnalytics, IoCalendar, IoHelp, IoLogOut} from 'react-icons/io5'
import {SideBarStyles, LinkItem, LinkGroup} from './styles'
import {Button} from './../../ui/buttons'

function SideBar  (props){
  let navigation = useNavigate()

  function onLogoutRequest() {
    navigation('/')
  }

  return(
  <>
    <SideBarStyles>
      <div className="dashboard-link">
        <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
          <IoHome size="1.5rem" color="#16324f"/>
          Dashboard
        </Button>
      </div>
      <LinkGroup>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoLayers size="1.5rem" color="#16324f"/>
            Summary
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoGrid size="1.5rem" color="#16324f"/>
            Products
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoReceipt size="1.5rem" color="#16324f"/>
            Manage Orders
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoStatsChart size="1.5rem" color="#16324f"/>
            Sales Reports
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoStarHalf size="1.5rem" color="#16324f"/>
            Product Reviews
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoPricetags size="1.5rem" color="#16324f"/>
            Brands
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoMegaphone size="1.5rem" color="#16324f"/>
            Current Offers
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoBagHandle size="1.5rem" color="#16324f"/>
            Stock
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoCar size="1.5rem" color="#16324f"/>
            Suppliers
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoAnalytics size="1.5rem" color="#16324f"/>
            User Analytics
          </Button>
        </LinkItem>
      </LinkGroup>
      <LinkGroup>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoCalendar size="1.5rem" color="#16324f"/>
            Calendar
          </Button>
        </LinkItem>
        <LinkItem>
          <Button padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoHelp size="1.5rem" color="#16324f"/>
            Support
          </Button>
        </LinkItem>
        <LinkItem>
          <Button onClick={onLogoutRequest} padding="10px 15px 10px 10px" display="flex" gap="15px">
            <IoLogOut size="1.5rem" color="#16324f"/>
            Log Out
          </Button>
        </LinkItem>
      </LinkGroup>
    </SideBarStyles>
  </>
  )
}

export default SideBar