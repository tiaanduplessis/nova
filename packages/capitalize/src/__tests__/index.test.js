import capitalize from '..'

test('should capitalize words', () => {
  expect(capitalize).toBeDefined()
  expect(capitalize('foo')).toBe('Foo')
  expect(capitalize('FOO')).toBe('Foo')
  expect(capitalize('Foo')).toBe('Foo')
  expect(capitalize('foo bar baz')).toBe('Foo Bar Baz')
})
