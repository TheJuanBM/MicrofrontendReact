module.exports = {
  rootDir: 'src',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpeg)$': '<rootDir>/__mocks__/fileMock.ts',
    'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: ['/node_modules/(?!thejuanbm-react-library-ui)(.*)']
}
