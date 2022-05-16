import { render } from '@testing-library/react'
import Header from 'components/Header'

describe('components/Header', () => {
  it('should render', () => {
    const { container } = render(<Header>Header title</Header>)
    expect(container).toMatchSnapshot()
  })
})
