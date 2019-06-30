import getProp from '..'

test('should be defined', () => {
  expect(getProp).toBeDefined()
  expect(typeof getProp).toBe('function')
})

test('should get a nested prop', () => {
  const data = {
    foo: {
      bar: {
        baz: 5,
      },
    },
  }

  expect(getProp(data, 'foo.bar.baz')).toBe(5)
})

test('should fallback to default value', () => {
  expect(getProp({}, 'foo', 5)).toBe(5)
})
