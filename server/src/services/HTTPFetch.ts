import { Response, StackRequest } from './interfaces'

export class HTTPFetch {
  constructor() {}

  private handlestackRequest({ error }: { error: Error | unknown }): StackRequest {
    const baseError = {
      ok: false,
      status: 500,
      message: 'An error has occurred, please try again'
    }

    if (error instanceof Error) {
      return {
        ...baseError,
        message: error.message
      }
    }

    return baseError
  }

  public async getData<TData>({ url, config }: { url: string; config?: RequestInit }): Promise<Response<TData | null>> {
    try {
      const apiResponse = await fetch(url, {
        ...config,
        mode: 'cors',
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseJson = await apiResponse.json()

      return {
        data: responseJson,
        stack: {
          ok: true,
          status: 200,
          message: 'ok'
        }
      }
    } catch (error: Error | unknown) {
      return {
        data: null,
        stack: this.handlestackRequest({ error })
      }
    }
  }
}
