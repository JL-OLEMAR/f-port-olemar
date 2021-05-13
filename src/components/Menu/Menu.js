import React from 'react'
import { Link } from 'gatsby'

import Courses from '../Courses'
import SocialMedia from '../SocialMedia'
import './Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog developer</h2>
      </Link>
      <p>
        Blog sobre desarrollo web, programación JavaScript, React, NodeJs, Gatsby, NextJs, Angular...
      </p>
      <SocialMedia />
      <Courses />
    </div>
  )
}

export default Menu
