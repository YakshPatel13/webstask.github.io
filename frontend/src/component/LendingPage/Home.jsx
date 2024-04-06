import React from 'react'
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import Page3 from './Pages/page3'
import Page4 from './Pages/page4'
import Page5 from './Pages/page5'
import Page6 from './Pages/page6'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
  <>
      <Nav />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
  </>
  )
}

export default Home
