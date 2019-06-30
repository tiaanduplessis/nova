import once from '..'

test('should only call function once', () => {
  const fn = jest.fn()
  const fnOnce = once(fn)

  fnOnce()
  fnOnce()
  fnOnce()

  expect(once).toBeDefined()
  expect(fn).toHaveBeenCalledTimes(1)
})
