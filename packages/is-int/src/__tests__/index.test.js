import isInt from '..'

test('should check if value is integer', () => {
  expect(isInt).toBeDefined()
  expect(isInt(1)).toBeTruthy()
  expect(isInt(-1)).toBeTruthy()
  expect(isInt(1.1)).toBeFalsy()
})
