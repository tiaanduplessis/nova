import sortBy from '..'

test('should sort by object property', () => {
  expect(sortBy).toBeDefined()
  expect(sortBy([{ key: 5 }, { key: 3 }, { key: 1 }], 'key')[0].key).toBe(1)
})
