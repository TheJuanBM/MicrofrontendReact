import { useContext } from 'react'

import { Loading, Table } from '../components'
import CharactersProvider from '../modules/Character/context'

export function Information() {
  const { status } = useContext(CharactersProvider)

  if (status.isLoading) return <Loading />

  if (status.data) return <Table characters={status.data} />

  return null
}
