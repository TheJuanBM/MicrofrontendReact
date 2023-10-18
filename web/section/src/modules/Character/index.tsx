import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonProps } from 'thejuanbm-react-library-ui'

import CharactersProvider from './context'
import { getCharacterOptions } from './helpers'
import { CharacterKey } from './interfaces'

interface CharacterProps extends Pick<ButtonProps, 'theme'> {
  movie: CharacterKey
}

export function Character({ movie, theme }: CharacterProps) {
  const { t: translate } = useTranslation()

  const { handlerGetData, status } = useContext(CharactersProvider)

  const { label } = getCharacterOptions(movie)

  return (
    <Button
      theme={theme}
      disabled={status.isLoading}
      onClick={() => handlerGetData(movie)}
      label={`${translate('getData')} ${label}`}
    />
  )
}
