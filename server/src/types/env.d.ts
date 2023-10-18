export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      CORS_ALLOW: string
      API_URL_HARRY_POTTER: string
      API_URL_RICK_AND_MORTY: string
      IMAGE_HARRY_POTTER_PLACEHOLDER: string
    }
  }
}
