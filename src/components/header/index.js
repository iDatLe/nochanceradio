import React, { useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import './header.scss'
import ThreeDots from '../../images/three-dots.svg'

const Header = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false)

  const overlay = classnames('overlay', {
    active: isOverlayActive,
    inactive: !isOverlayActive,
  })

  const openOverlay = e => {
    setIsOverlayActive(!isOverlayActive)
  }

  return (
    <div className="header">
      <div className="left-side">
        <ThreeDots
          className="vertical-three-dots"
          onClick={e => openOverlay(e)}
        />

        <h1>
          <Link to="/">NO CHANCE</Link>
        </h1>

        <div className={overlay}>
          <div className="links">
            <Link to="/featured">Featured</Link>
            <Link to="/events">Events</Link>
            <Link to="/podcast">Podcast</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>

      <div className="right-side"></div>
    </div>
  )
}

export default Header
