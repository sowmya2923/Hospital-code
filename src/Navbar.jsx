import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return(
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✚</span>
          <span className="logo-text">MediCare <span className="logo-accent">Hub</span></span>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Patients</Link>
          <Link to="/Doctors" className="nav-link">Doctors</Link>
          <Link to="/Login" className="nav-link btn-login">Add Patient</Link>
          <Link to="/Register" className="nav-link btn-register">Add Doctor</Link>
        </div>
      </div>
    </nav>
    )
}