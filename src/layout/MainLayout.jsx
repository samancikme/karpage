import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedRoutes from '../components/AnimatedRoutes'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <AnimatedRoutes>
        <Outlet />
      </AnimatedRoutes>
      <Footer />
    </div>
  )
}

export default MainLayout