import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './index'

test('renders hey there title', () => {
  render(<Contact />)
  const titleElement = screen.getByText(/contact us/i)
  expect(titleElement).toBeInTheDocument()
})
