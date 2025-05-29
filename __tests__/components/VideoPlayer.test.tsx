import { render, screen, fireEvent } from '@testing-library/react'
import VideoPlayer from '~/components/VideoPlayer'

describe('VideoPlayer', () => {
  const mockProps = {
    src: 'https://example.com/video.mp4',
    poster: 'https://example.com/poster.jpg',
    onPlay: jest.fn(),
    onPause: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders video player with correct props', () => {
    render(<VideoPlayer {...mockProps} />)
    
    const video = screen.getByRole('video')
    expect(video).toHaveAttribute('src', mockProps.src)
    expect(video).toHaveAttribute('poster', mockProps.poster)
  })

  it('calls onPlay when video starts playing', () => {
    render(<VideoPlayer {...mockProps} />)
    
    const video = screen.getByRole('video')
    fireEvent.play(video)
    
    expect(mockProps.onPlay).toHaveBeenCalled()
  })

  it('calls onPause when video is paused', () => {
    render(<VideoPlayer {...mockProps} />)
    
    const video = screen.getByRole('video')
    fireEvent.pause(video)
    
    expect(mockProps.onPause).toHaveBeenCalled()
  })
}) 