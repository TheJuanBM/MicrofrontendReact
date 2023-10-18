jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {}
  }
}))

jest.restoreAllMocks()
