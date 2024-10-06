// import React from 'react'
import BookList from '../book/BookList'
import AboutUs from '../shared/AboutUs'

import ContactUs from '../shared/ContactUs'

// import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function HomePage() {
  return (
    <> 
      <Navbar></Navbar>  
      <BookList></BookList>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      {/* <Footer></Footer> */}
    </>
  )
}
