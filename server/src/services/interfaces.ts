export type StackRequest = {
  ok: boolean
  status: number
  message: string
}

export interface Response<TData> {
  data: TData
  stack: StackRequest
}
