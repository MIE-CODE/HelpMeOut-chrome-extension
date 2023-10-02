import Navbar from '../component/navbar'
import HomeSection from '../component/hero'
import Features from '../component/features'
import Howitwork from '../component/howitwork'
import React from 'react'
import Footer from '../component/footer'

const Home = () => {
  return (
    <React.Fragment>
    <div className=''>
      <Navbar />
      <HomeSection />
      <Features />
      <Howitwork />
    </div>
    <Footer />
    </React.Fragment>
  )
}

export default Home
