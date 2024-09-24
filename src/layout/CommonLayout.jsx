import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Banner from '../shared/Banner'
import Footer from '../shared/Footer'
import BannerDynamic from '../shared/BannerDynamic'


export default function commonLayout() {
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     
     {/* <BannerDynamic></BannerDynamic> */}
     <Outlet></Outlet>
     <Footer></Footer>
    </>  
  )
}
