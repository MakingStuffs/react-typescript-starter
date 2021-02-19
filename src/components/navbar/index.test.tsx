import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './index'
import logo from '../../assets/images/logo192.png'

test('render nav element', () => {
  const { container } = render(
    <Navbar
      className="main-navigation"
      logoSrc={logo}
      logoAlt="The react logo"
    />
  )
  const navElement = container.querySelector('nav.main-navigation')
  expect(navElement).toBeInTheDocument()
})
