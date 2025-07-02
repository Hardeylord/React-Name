import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MainaLayouts() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}
