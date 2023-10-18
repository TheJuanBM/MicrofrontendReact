import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import event from '@testing-library/user-event'
import React from 'react'

import { HeaderApp } from '../app'

Object.defineProperty(window, 'location', {
  value: {
    href: ''
  }
})

describe('HeaderApp component', () => {
  test('Should render okay', () => {
    render(<HeaderApp />)

    expect(screen.getByTestId('header')).toBeInTheDocument()

    expect(screen.getByRole('figure')).toBeInTheDocument()

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  test.each([
    ['es', 'Español'],
    ['en', 'Inglés']
  ])('Should change the "lng" to %s parameter of the URL when is %s', async (languageValue, languageLabel) => {
    render(<HeaderApp />)

    event.click(screen.getByText(languageLabel))

    window.location.href = languageValue

    expect(window.location.href).toEqual(languageValue)
  })
})
