module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'packages/**/*.{js}',
      '!**/node_modules/**',
      '!**/dist/**'
    ],
    roots: [
      'packages/',
    ],
  };