import React from 'react'
import PreLoader from '../Components/PreLoader'
import Header from '../Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Layouts/Footer'

function OultetRoute() {
  return (
    <div>
        {/* <PreLoader /> */}
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default OultetRoute