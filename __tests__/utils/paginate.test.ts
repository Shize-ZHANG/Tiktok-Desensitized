import { paginate } from '@/utils'

describe('paginate', () => {
  it('returns the correct page of data', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(paginate(data, 1, 3)).toEqual([1, 2, 3])
    expect(paginate(data, 2, 3)).toEqual([4, 5, 6])
    expect(paginate(data, 4, 3)).toEqual([10])
  })

  it('returns an empty array if page is out of range', () => {
    const data = [1, 2, 3]
    expect(paginate(data, 2, 5)).toEqual([])
  })
}) 