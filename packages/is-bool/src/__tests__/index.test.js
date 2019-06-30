import isBool from '..'

test('should check if value is boolean', () => {
  expect(isBool).toBeDefined()
  expect(isBool(true)).toBeTruthy()
  expect(isBool(false)).toBeTruthy()

  expect(isBool('true')).toBeFalsy()
  expect(isBool(9)).toBeFalsy()
})
