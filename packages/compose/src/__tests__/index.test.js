import compose from '..'

test('should compose functions', () => {
  const fn = jest.fn(a => a)
  expect(compose).toBeDefined()
  expect(compose(fn, fn)(5)).toBe(5)
  expect(fn).toBeCalled()
})
