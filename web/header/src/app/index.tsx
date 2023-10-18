import { Box, ButtonLink } from 'thejuanbm-react-library-ui'

import { LinkLogo } from './LinkLogo'
import { HeaderStyles } from './styles'

export function HeaderApp() {
  const currentLng = new URLSearchParams(window.location.search).get('lng') || 'en'

  return (
    <header data-testid="header">
      <Box $styles={HeaderStyles}>
        <LinkLogo />
        <div className="header__section__buttons">
          <ButtonLink
            label="Español"
            disabled={currentLng === 'es'}
            $isActive={currentLng === 'es'}
            onClick={() => (window.location.href = '?lng=es')}
          />
          <ButtonLink
            label="Inglés"
            disabled={currentLng === 'en'}
            $isActive={currentLng === 'en'}
            onClick={() => (window.location.href = '?lng=en')}
          />
        </div>
      </Box>
    </header>
  )
}
