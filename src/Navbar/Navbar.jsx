import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar neutral">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl base-content" href="#">
          LMS
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Accueile</a>
          </li>
          <li>
            <a>Offre de formation</a>
          </li>
          <li>
            <a>evenements</a>
          </li>
          <li>
            <a>calendrier</a>
          </li>
          <li>
            <a>carrieres</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
