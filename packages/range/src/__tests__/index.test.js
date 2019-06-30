import range from '..'

test('should create range', () => {
  expect(range).toBeDefined()
  expect(range(4)).toStrictEqual([0, 1, 2, 3])
  expect(range(3, 6)).toStrictEqual([3, 4, 5])
  expect(range(10, 0, -1)).toStrictEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  expect(range(8, 2, 2)).toStrictEqual([])
})
