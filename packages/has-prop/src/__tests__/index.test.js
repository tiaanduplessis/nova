import hasProp from '..'


test('should check if object has property', () => {
  const data = {
    foo: {
      bar: {
        baz: 5,
      },
    },
  }

  expect(hasProp).toBeDefined()
  expect(hasProp(data, 'foo')).toBeTruthy()
  expect(hasProp(data, 'foo.bar.baz')).toBeTruthy()
  expect(hasProp(data, 'ping')).toBeFalsy()
})
