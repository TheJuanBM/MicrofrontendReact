module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['html'],
  setupFiles: ['dotenv/config'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    '^.+\\.(js|ts|json|node)$': 'ts-jest'
  },
  moduleNameMapper: {
    '/src/(.*)': '<rootDir>/src/$1'
  }
}
