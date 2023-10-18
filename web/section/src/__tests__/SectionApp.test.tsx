import '@testing-library/jest-dom'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'

import {
  mockRickAndMortyStorage,
  mockValueParamsLoadingState,
  mockValueParamsResponse
} from '../__mocks__/Section.mocks'
import { Section } from '../layout'
import CharactersProvider, { CharactersProviderParams } from '../modules/Character/context'
import { useContextCharacters } from '../modules/Character/hooks'

global.fetch = jest.fn(() => ({
  json: () => Promise.resolve(mockRickAndMortyStorage)
})) as unknown as (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

const RenderComponent = ({ valueParams }: { valueParams?: CharactersProviderParams }) => {
  const value = useContextCharacters()
  const state = valueParams ?? value

  return (
    <CharactersProvider.Provider value={state}>
      <Section />
    </CharactersProvider.Provider>
  )
}

describe('SectionApp component', () => {
  test('Should render okay', () => {
    render(<RenderComponent />)

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  test('Should show loading state', () => {
    render(<RenderComponent valueParams={mockValueParamsLoadingState} />)

    expect(screen.getByRole('figure')).toBeInTheDocument()
  })

  test('Should show the characters of Rick and Morty', () => {
    render(<RenderComponent valueParams={mockValueParamsResponse} />)

    expect(screen.getAllByTestId('item-list')).toHaveLength(3)
  })

  test('Should get Harry Potter characters', async () => {
    render(<RenderComponent />)

    expect(screen.getAllByRole('button')).toHaveLength(2)

    await userEvent.click(screen.getByRole('button', { name: /Harry Potter/i }))

    waitForElementToBeRemoved(async () => await screen.findByRole('figure'))

    expect(screen.getAllByTestId('item-list')).toHaveLength(3)
  })
})
