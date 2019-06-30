import isArr from '..'

test('should check if value is string', () => {
  expect(isArr).toBeDefined()
  expect(isArr([1, 2, 3])).toBeTruthy()
  expect(isArr('')).toBeFalsy()
})
