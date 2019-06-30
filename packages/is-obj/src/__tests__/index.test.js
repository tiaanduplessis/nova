import isObj from '..'

test('should check if value is object', () => {
  expect(isObj).toBeDefined()
  expect(isObj({})).toBeTruthy()
  expect(isObj([])).toBeFalsy()
  expect(isObj('')).toBeFalsy()
})
