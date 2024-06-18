import React from 'react'

//importing css
import './home.css'

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/features/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className='homeContainer'>
          <Featured></Featured>
          <PropertyList></PropertyList>
          <FeaturedProperties></FeaturedProperties>
          <MailList></MailList>
          <Footer></Footer>
      </div>
    </div>
  )
}
