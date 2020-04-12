import { Link } from "gatsby"
import React from "react"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <h1>
          <Link to="/">NO CHANCE</Link>
        </h1>
        <div className="links">
          <Link to="/featured">Featured</Link>
          <Link to="/events">Events</Link>
          <Link to="/podcast">Podcast</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  )
}

export default Header
