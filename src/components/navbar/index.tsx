import React from 'react'
import { LinkInterface } from './types'
import { links } from './data/navlinks'
import { Link } from 'react-router-dom'

import './style.scss'

interface NavbarProps {
  logoSrc: string
  logoAlt: string
}

const Navbar: React.FC<
  NavbarProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ logoSrc, logoAlt, ...rest }) => {
  return (
    <nav className="main-navigation" {...rest}>
      <div className="navbar-logo">
        <img src={logoSrc} alt={logoAlt} height={50} />
      </div>
      <div className="navbar-links">
        <ul>
          {links.map((link: LinkInterface, i) => (
            <li key={i}>
              <Link to={link.href} title={link.title}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
