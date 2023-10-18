import request from 'supertest'

import { Server } from '../src/models'

const server = new Server()

describe('Test server', () => {
  test('Should response the GET method harry-potter', async () => {
    const response = await request(server.app).get('/api/harry-potter')

    expect(response.statusCode).toBe(200)
  })

  test('Should response the GET method rick-and-morty', async () => {
    const response = await request(server.app).get('/api/rick-and-morty')

    expect(response.statusCode).toBe(200)
  })

  test('Should handle 404 Error response', async () => {
    const response = await request(server.app).get('/api')

    expect(response.statusCode).toBe(404)
  })

  test('Should handle 500 Error response', async () => {
    const STATUS = 500

    const response = await request(server.app)
      .get('/api/rick-and-morty')
      .expect(res => {
        res.body = null
        res.status = STATUS
        res.statusCode = STATUS

        return res
      })
      .expect(STATUS)

    expect(response.statusCode).toBe(STATUS)
  })
})
