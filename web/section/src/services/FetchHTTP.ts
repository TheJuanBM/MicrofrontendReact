export class FetchHTTP {
  private readonly API_SERVER: string = 'https://server-mfwr-420e49c9ff76.herokuapp.com'

  async getData<TData>(endPoint: string): Promise<TData> {
    try {
      const request = await fetch(`${this.API_SERVER}/api/${endPoint}`, { method: 'GET' })

      const data = await request.json()

      return data
    } catch (error) {
      console.error({ error })
    }
  }
}
