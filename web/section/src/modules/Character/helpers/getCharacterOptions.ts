import { CharacterKey, CharacterOptions } from '../interfaces'

export const getCharacterOptions = (movie: CharacterKey) => {
  const characterOptions: CharacterOptions = {
    RICK_AND_MORTY: {
      label: 'Rick and Morty',
      endPoint: 'rick-and-morty'
    },
    HARRY_POTTER: {
      label: 'Harry Potter',
      endPoint: 'harry-potter'
    }
  }

  const character = characterOptions[movie]

  return character
}
