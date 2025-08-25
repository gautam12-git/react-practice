import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SiteFooter from './components/SiteFooter/SiteFooter'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <SiteFooter />
    </>
  )
}

export default Layout
