import React from 'react'
import { render, screen } from '@testing-library/react'
import About from './index'

test('renders hey there title', () => {
  render(<About />)
  const titleElement = screen.getByText(/about us/i)
  expect(titleElement).toBeInTheDocument()
})
