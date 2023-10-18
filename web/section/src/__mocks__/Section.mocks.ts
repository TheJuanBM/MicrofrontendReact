export const mockRickAndMortyStorage = [
  { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
  { id: 2, name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
  { id: 3, name: 'Summer Smith', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' }
]

export const mockValueParamsLoadingState = {
  handlerGetData: jest.fn(),
  status: {
    data: null,
    isLoading: true
  }
}

export const mockValueParamsResponse = {
  handlerGetData: jest.fn(),
  status: {
    isLoading: false,
    data: mockRickAndMortyStorage
  }
}
