import debounce from '..'

test('should export function', () => {
  expect(debounce).toBeDefined()
  expect(typeof debounce).toBe('function')
})

test('should only call function once', done => {
  const fn = jest.fn(() => {
    expect(fn).toHaveBeenCalledTimes(1)
    done()
  })
  const debouncedFn = debounce(fn)

  debouncedFn()
  debouncedFn()
  debouncedFn()
})
