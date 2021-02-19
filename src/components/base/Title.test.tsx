import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './Title'

test('renders hey there title', () => {
  render(<Title tag="h2" title="Hey there" />)
  const titleElement = screen.getByText(/hey there/i)
  expect(titleElement).toBeInTheDocument()
})
