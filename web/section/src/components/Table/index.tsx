import { Character } from '../../modules/Character/interfaces'
import { TableWrapper } from './styles'

interface TableProps {
  characters: Character[]
}

export function Table({ characters }: TableProps) {
  return (
    <TableWrapper>
      <ul className="table" role="table">
        {characters.map(character => (
          <li key={character.id} title={character.name} data-testid="item-list" className="table__item">
            <img src={character.image} alt={`${character.name} avatar`} className="table__item__image" />
            <span>{character.name}</span>
          </li>
        ))}
      </ul>
    </TableWrapper>
  )
}
