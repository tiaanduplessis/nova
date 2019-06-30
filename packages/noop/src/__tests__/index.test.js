import noop from '..'

test('should perform no operation', () => {
  expect(noop).toBeDefined()
  expect(noop()).toBeUndefined()
})
