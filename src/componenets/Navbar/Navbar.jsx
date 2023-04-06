import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar neutral">
      <div className="flex-1">
        <NavLink
          className="btn btn-ghost h-full normal-case base-content tracking-logo font-extrabold text-5xl text-black hover:text-white hover:bg-black transition-colors ease-linear"
          to="/"
        >
          LMS
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/offre">Offre de formation</NavLink>
          </li>
          <li>
            <NavLink to="/event">evenements</NavLink>
          </li>
          <li>
            <NavLink to="/calendar">calendrier</NavLink>
          </li>
          <li>
            <NavLink to="/carriere">carrieres</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
