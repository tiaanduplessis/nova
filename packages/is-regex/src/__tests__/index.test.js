import isRegex from '..'

test('should check if value is regex', () => {
  expect(isRegex).toBeDefined()
  expect(isRegex(/f00/)).toBeTruthy()
  expect(isRegex('')).toBeFalsy()
})
