import { getLocalizedHref } from '@/utils'

describe('getLocalizedHref', () => {
  it('returns the correct localized href', () => {
    expect(getLocalizedHref('/about', 'en')).toBe('/en/about')
    expect(getLocalizedHref('/about/', 'en')).toBe('/en/about')
    expect(getLocalizedHref('/contact', 'zh')).toBe('/zh/contact')
    expect(getLocalizedHref('/contact/', 'zh')).toBe('/zh/contact')
  })
}) 