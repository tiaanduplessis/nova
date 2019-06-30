import isStr from '..'

test('should check if value is string', () => {
  expect(isStr).toBeDefined()
  expect(isStr('string')).toBeTruthy()
  expect(isStr(1)).toBeFalsy()
})
