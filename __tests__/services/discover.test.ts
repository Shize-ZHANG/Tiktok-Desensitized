import { getDiscoverList, updateFollowOrLikeDiscover, UpdateStrategy } from '~/services/discover'

// Mock fetch
global.fetch = jest.fn()

describe('Discover Service', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getDiscoverList', () => {
    it('should fetch discover list successfully', async () => {
      const mockData = [
        {
          id: '1',
          username: 'test_user',
          video_url: 'https://example.com/video.mp4',
          description: 'Test video',
          likes: 0,
          comments: 0,
          shares: 0,
          is_following: false,
          is_liked: false,
        },
      ]

      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      })

      const result = await getDiscoverList()
      expect(result).toEqual(mockData)
      expect(global.fetch).toHaveBeenCalledWith('/api/discover/list')
    })

    it('should handle fetch error', async () => {
      ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))

      await expect(getDiscoverList()).rejects.toThrow('Network error')
    })
  })

  describe('updateFollowOrLikeDiscover', () => {
    it('should update follow status successfully', async () => {
      const params = {
        id: '1',
        username: 'test_user',
        param: UpdateStrategy.Follow,
      }

      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      })

      await updateFollowOrLikeDiscover(params)
      expect(global.fetch).toHaveBeenCalledWith('/api/discover/follow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
    })

    it('should update like status successfully', async () => {
      const params = {
        id: '1',
        username: 'test_user',
        param: UpdateStrategy.Like,
      }

      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      })

      await updateFollowOrLikeDiscover(params)
      expect(global.fetch).toHaveBeenCalledWith('/api/discover/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
    })
  })
}) 