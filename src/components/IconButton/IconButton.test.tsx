import { fireEvent, render } from '@testing-library/react'
import IconButton from 'components/IconButton'
import { IconButtonProp } from 'components/IconButton/types'
import editIcon from 'assets/edit.svg'

const defaultProp: IconButtonProp = {
  onClick: jest.fn,
  icon: editIcon,
  alt: 'icon'
}

describe('components/IconButton', () => {
  it('should render', () => {
    const { container } = render(<IconButton {...defaultProp} />)
    expect(container).toMatchSnapshot()
  })

  it('should call onClick callback', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<IconButton {...defaultProp} onClick={onClick} />)
    fireEvent.click(getByRole('button'))
    expect(onClick).toBeCalledTimes(1)
  })
})
