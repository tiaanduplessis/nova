import isEmpty from '..'

test('should check if empty', () => {
  expect(isEmpty).toBeDefined()
  expect(isEmpty({})).toBeTruthy()
  expect(isEmpty([])).toBeTruthy()
  expect(isEmpty('')).toBeTruthy()
  expect(isEmpty({ foo: 1 })).toBeFalsy()
})
