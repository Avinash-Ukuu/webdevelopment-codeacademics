import React from 'react'
import Newsletter from '../components/newsletter'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Browse from '@/components/browse'
import Choosecode from '@/components/choosecode'

const page = () => {
  return (
    <>

      {/* this is header */}
      <Header />
      {/* this is banner */}
      <Banner />
      {/* this is header */}

      {/* This is choose code section */}
      <Choosecode />

    
      {/* This is meet out expert */}
      <Browse />
        {/* This is Newsletter */}
        <Newsletter />
      {/* This is Newsletter */}
      {/* This is Footer */}
      < Footer />
      {/* This is Footer */}
    </>

  )
}

export default page