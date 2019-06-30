import isFunc from '..'

test('should check if value is function', () => {
  expect(isFunc).toBeDefined()
  expect(isFunc(() => {})).toBeTruthy()
  expect(isFunc(() => {}, () => {})).toBeTruthy()
})
