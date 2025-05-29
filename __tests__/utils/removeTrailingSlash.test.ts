import { removeTrailingSlash } from '@/utils'

describe('removeTrailingSlash', () => {
  it('removes trailing slashes from a string', () => {
    expect(removeTrailingSlash('hello/')).toBe('hello')
    expect(removeTrailingSlash('hello///')).toBe('hello')
    expect(removeTrailingSlash('hello/world/')).toBe('hello/world')
    expect(removeTrailingSlash('hello')).toBe('hello')
  })
}) 