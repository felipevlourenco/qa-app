import { fireEvent, render } from '@testing-library/react'
import Item from 'components/Questions/List/Item'
import { Question } from 'store/questions/types'
import MockStore from 'test/utils/MockStore'

describe('component/Item', () => {
  const question: Question = {
    id: 1,
    question: 'This is a question',
    answer: 'This is a answer'
  }

  it('should render', () => {
    const { container } = render(
      <MockStore>
        <Item question={question} />
      </MockStore>
    )
    expect(container).toMatchSnapshot()
  })

  it('should answer be visible when question is click', () => {
    const { getByRole, getByText } = render(
      <MockStore>
        <Item question={question} />
      </MockStore>
    )

    fireEvent.click(getByRole('listitem'))
    expect(getByText(/this is a answer/i)).toBeInTheDocument()
  })
})
