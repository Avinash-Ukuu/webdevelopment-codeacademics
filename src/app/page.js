import React from 'react'
import Newsletter from '../components/newsletter'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Browse from '@/components/browse'
 
const page = () => {
  return (
    <>

     {/* this is header */}
     <Header/>
     {/* This is browse */}
     <Browse/>
    {/* this is header */}
    {/* This is Newsletter */}
    <Newsletter/>
     {/* This is Newsletter */}
     
      {/* This is Footer */}
      < Footer/>
      {/* This is Footer */}

   

    {/* this is banner */}
    <Banner/>
    {/* this is banner */}


    </>
  )
}

export default page