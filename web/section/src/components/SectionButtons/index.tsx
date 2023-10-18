import { Character } from '../../modules'
import { SectionButtonsWrapper } from './styles'

export function SectionButtons() {
  return (
    <SectionButtonsWrapper>
      <Character movie="HARRY_POTTER" />
      <Character theme="dark" movie="RICK_AND_MORTY" />
    </SectionButtonsWrapper>
  )
}
