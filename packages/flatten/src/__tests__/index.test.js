import flatten from '..'

test('should flatten array', () => {
  expect(flatten).toBeDefined()
  expect(flatten([1, 2, 3])).toContain(1, 2, 3)
  expect(flatten([1, [2, 3]])).toContain(1, 2, 3)
  expect(flatten([1, [2, 3, [4]]])).toContain(1, 2, 3, 4)
})
