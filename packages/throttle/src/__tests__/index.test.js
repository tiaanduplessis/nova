import throttle from '..'

test('should be defined', () => {
  expect(throttle).toThrow()
})

test('should call function only once within delay period', () => {
  const func = jest.fn()
  const throtFunc = throttle(func)

  throtFunc()
  throtFunc()
  throtFunc()

  expect(func).toHaveBeenCalledTimes(1)
})

test('should invoke function again if delay has passed', done => {
  const func = jest.fn()
  const throtFunc = throttle(func, 100)

  throtFunc()

  setTimeout(() => {
    throtFunc()
    expect(func).toHaveBeenCalledTimes(2)
    done()
  }, 500)
})
