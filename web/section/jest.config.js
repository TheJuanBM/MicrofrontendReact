module.exports = {
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageReporters: ['html'],
  setupFiles: ['./jest-setup.ts'],
  transform: { '^.+\\.(j|t)sx?$': 'babel-jest' },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: ['/node_modules/(?!thejuanbm-react-library-ui)(.*)'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs'
  }
}
