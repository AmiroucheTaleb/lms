import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../componenets/Navbar/Navbar"
import Footer from "../componenets/Footer/Footer"

function Layout() {
  return (
    <div className="bg-white min-w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
