import { fireEvent, render, screen } from '@testing-library/react'
import Tooltip from 'components/Tooltip'

describe('components/Tooltip', () => {
  const childText = 'Hover to show tooltip'
  const tooltipContent = 'This is a tooltip'

  it('should render', () => {
    const { container } = render(<Tooltip content={tooltipContent}>{childText}</Tooltip>)
    expect(container).toMatchSnapshot()
  })

  it('should be visible on mouse hover', () => {
    const { getByText } = render(<Tooltip content={tooltipContent}>{childText}</Tooltip>)
    fireEvent.mouseEnter(getByText(childText))
    expect(getByText(tooltipContent)).toBeInTheDocument()
  })

  it('should not be visible on mouse hover', () => {
    const { getByText } = render(<Tooltip content={tooltipContent}>{childText}</Tooltip>)
    fireEvent.mouseEnter(getByText(childText))
    expect(getByText(tooltipContent)).toBeInTheDocument()
    fireEvent.mouseLeave(getByText(childText))
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument()
  })
})
