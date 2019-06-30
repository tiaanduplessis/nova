import randomizeArr from '..'

test('should randomize array', () => {
  const arr = [1, 2, 3, 4, 5]

  expect(randomizeArr).toBeDefined()
  expect(randomizeArr(arr)[0]).not.toBe(1)
})
