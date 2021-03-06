import React from 'react'

import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase'
import { Link, NavLink } from 'react-router-dom'

import {IoHome, IoAddCircle, IoPencil, IoTrash, IoGrid, IoStatsChart, IoStarHalf, IoPricetags, IoBagHandle, IoCar, IoAnalytics, IoCalendar, IoHelp, IoLogOut} from 'react-icons/io5'
import {SideBarStyles, LinkItem, LinkGroup} from './styles'
import {Button} from './../../ui/buttons'

function SideBar  (props){
  function onLogoutRequest() {
    signOut(auth)
  }

  return(
  <>
    <SideBarStyles>
      <div className="dashboard-link">
        <Link to="/dashboard">
          <IoHome size="1.5rem" color="#16324f"/>
          Dashboard
        </Link>
      </div>
      <LinkGroup>
        <LinkItem>
          <NavLink
            exact="true"
            to="all"
            activeclassname="active"
          >
            <IoGrid size="1.5rem" color="#16324f"/>
            View All Products
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink
            exact="true"
            to="add"
            activeclassname="active"
          >
            <IoAddCircle size="1.5rem" color="#16324f"/>
            Add New Product
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink
            exact="true"
            to="edit"
            activeclassname="active"
          >
            <IoPencil size="1.5rem" color="#16324f"/>
            Edit Product
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink
            exact="true"
            to="delete"
            activeclassname="active"
          >
            <IoTrash size="1.5rem" color="#16324f"/>
            Remove Product
          </NavLink>
        </LinkItem>
        <LinkItem>
          <Link to="/dashboard">
            <IoStarHalf size="1.5rem" color="#16324f"/>
            Product Reviews
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/dashboard">
            <IoPricetags size="1.5rem" color="#16324f"/>
            Brands
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/dashboard">
            <IoStatsChart size="1.5rem" color="#16324f"/>
            Sales Report
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/dashboard">
            <IoBagHandle size="1.5rem" color="#16324f"/>
            Stock
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/dashboard">
            <IoCar size="1.5rem" color="#16324f"/>
            Suppliers
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/dashboard">
            <IoAnalytics size="1.5rem" color="#16324f"/>
            User Analytics
          </Link>
        </LinkItem>
      </LinkGroup>
      <LinkGroup>
        <LinkItem>
          <Link to="/dashboard">
            <IoCalendar size="1.5rem" color="#16324f"/>
            Calendar
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/dashboard">
            <IoHelp size="1.5rem" color="#16324f"/>
            Support
          </Link>
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