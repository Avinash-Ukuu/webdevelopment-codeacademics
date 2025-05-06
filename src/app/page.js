import React from 'react'
import Newsletter from '../components/newsletter'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Browse from '@/components/browse'
import Choosecode from '@/components/choosecode'
import Learngrow from '@/components/learngrow'
import Joinus from '@/components/joinus'
import Categories from '@/components/categories'
import Dev from '@/components/dev'
import Discoveryourgain from '@/components/discoveryourgain'

const page = () => {
      return (
            <>

                  <Header />
                  <Banner />
                  <Categories />
                  <Joinus />
                  <Learngrow />
                  <Dev />
                  <Choosecode />
                  <Browse />
                  <Discoveryourgain />
                  <Newsletter />
                  < Footer />

            </>

      )
}

export default page