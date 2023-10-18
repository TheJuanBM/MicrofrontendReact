import { Context, createContext } from 'react'

import { Character, CharacterKey } from '../interfaces'

export interface StatusCharactersData {
  isLoading: boolean
  data: null | Character[]
}

export interface CharactersProviderParams {
  status: StatusCharactersData
  handlerGetData: (characterKey: CharacterKey) => void
}

export const defaultValueContext: CharactersProviderParams = {
  status: {
    data: null,
    isLoading: false
  },
  handlerGetData: () => null
}

const CharactersProvider: Context<CharactersProviderParams> = createContext(defaultValueContext)

export default CharactersProvider
