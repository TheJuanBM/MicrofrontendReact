import { type Request, type Response } from 'express'

import { ENV } from '../config'
import { HTTPFetch } from '../services/HTTPFetch'

const serviceHTTP = new HTTPFetch()

interface ParseData {
  id: string
  name: string
  image: string
}

export async function getHarryPotterCharacters(_: Request, res: Response) {
  const response = await serviceHTTP.getData<ParseData[]>({
    url: ENV.API_URL_HARRY_POTTER
  })

  if (!response.stack.ok || !response.data) return response

  const dataFormatted: ParseData[] = response.data.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image.length ? item.image : ENV.IMAGE_HARRY_POTTER_PLACEHOLDER
  }))

  return res.send(dataFormatted)
}

export async function getRickAndMortyCharacters(_: Request, res: Response) {
  const response = await serviceHTTP.getData<{ results: ParseData[] }>({
    url: ENV.API_URL_RICK_AND_MORTY
  })

  if (!response.stack.ok || !response.data) return response

  const dataFormatted: ParseData[] = response.data.results.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image
  }))

  return res.send(dataFormatted)
}
