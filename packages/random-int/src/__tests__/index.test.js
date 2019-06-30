import random from '..'

test('should get random in range', () => {
  expect(random).toBeDefined()
  for (let i = 0; i < 100; i += 1) {
    const val = random(0, 10)
    expect(val).toBeGreaterThanOrEqual(0)
    expect(val).toBeLessThanOrEqual(10)
  }
})
