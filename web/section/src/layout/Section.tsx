import { SectionButtons } from '../components'
import { SectionElement } from '../styles'
import { Information } from './Information'

export function Section() {
  return (
    <SectionElement>
      <div className="section">
        <SectionButtons />
        <Information />
      </div>
    </SectionElement>
  )
}
