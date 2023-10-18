import { Section } from './layout'
import CharactersProvider from './modules/Character/context'
import { useContextCharacters } from './modules/Character/hooks'

export function SectionApp() {
  const value = useContextCharacters()

  return (
    <CharactersProvider.Provider value={value}>
      <Section />
    </CharactersProvider.Provider>
  )
}
