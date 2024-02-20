import React from 'react'
import {NavLink} from "react-router-dom"
import "../css/style.css"

function Header() {
  return (
   <div className="header">
    <div className="container py-5">
        <NavLink to="/" className='m-0'><h1>Olkeler haqqinda melumat</h1></NavLink>
    </div>
   </div>
  )
}

export default Header