import { fireEvent, render } from '@testing-library/react'
import Button from 'components/Button'

const defaultProp = {
  onClick: jest.fn
}

describe('components/Button', () => {
  it('should render', () => {
    const { container } = render(<Button {...defaultProp}>Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should call onClick callback', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Button</Button>)
    fireEvent.click(getByText('Button'))
    expect(onClick).toBeCalledTimes(1)
  })

  it('should not call onClick callback if button is disable', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button onClick={onClick} disabled>
        Button
      </Button>
    )
    fireEvent.click(getByText('Button'))
    expect(onClick).toBeCalledTimes(0)
  })
})
