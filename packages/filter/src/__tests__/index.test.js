import filter from '..'

test('should filter based on condition', () => {
  expect(filter).toBeDefined()
  expect(filter(a => a > 0)([1, -2, 3])).toHaveLength(2)
})
