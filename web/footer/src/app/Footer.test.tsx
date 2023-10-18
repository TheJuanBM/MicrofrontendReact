import { render, screen } from '@testing-library/react'
import React from 'react'

import { Footer } from '.'

describe('Footer component', () => {
  test('Should render okay', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByText(/TheJuanBM/i)).toBeInTheDocument()
  })
})
