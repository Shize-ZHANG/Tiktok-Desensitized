import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/Button/Button'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )
    fireEvent.click(screen.getByText('Disabled'))
    expect(handleClick).not.toHaveBeenCalled()
  })
}) 