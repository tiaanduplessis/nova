import curry from '..'

test('should curry a function', () => {
  expect(curry).toBeDefined()
  expect(curry(arg => arg)(5)).toBe(5)
})
