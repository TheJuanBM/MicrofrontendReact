import { useState } from 'react'

import { FetchHTTP } from '../../../services'
import { StatusCharactersData, defaultValueContext } from '../context'
import { getCharacterOptions } from '../helpers'
import { Character, CharacterKey } from '../interfaces'

export function useContextCharacters() {
  const [data, setData] = useState<StatusCharactersData>(defaultValueContext.status)

  async function handlerGetData(movie: CharacterKey) {
    setData({ data: null, isLoading: true })

    const { endPoint } = getCharacterOptions(movie)

    const fetchInstance = new FetchHTTP()

    fetchInstance
      .getData<Character[]>(endPoint)
      .then(data => setData({ data, isLoading: false }))
      .catch(console.error)
      .finally(() => setData(prevState => ({ ...prevState, isLoading: false })))
  }

  return { handlerGetData, status: data }
}
