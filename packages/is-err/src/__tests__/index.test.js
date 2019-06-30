import isErr from '..'

test('should check if value is error', () => {
  expect(isErr).toBeDefined()
  expect(isErr(new Error('test'))).toBeTruthy()
  expect(isErr('test')).toBeFalsy()
})
