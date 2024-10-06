// import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'

export default function commonLayout() {
  return (
    <>
     <Outlet></Outlet>
     <Footer></Footer>
    </>  
  )
}
