import isNum from '..'

test('should check if value is number', () => {
  expect(isNum).toBeDefined()
  expect(isNum(1)).toBeTruthy()
  expect(isNum(1.5)).toBeTruthy()
  expect(isNum('1')).toBeFalsy()
  expect(isNum(undefined)).toBeFalsy()
})
