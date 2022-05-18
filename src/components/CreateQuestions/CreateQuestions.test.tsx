import { fireEvent, render, queryByAttribute, act, waitFor } from '@testing-library/react'
import CreateQuestions from 'components/CreateQuestions'
import MockStore from 'test/utils/MockStore'

describe('component/CreateQuestions', () => {
  const getById = queryByAttribute.bind(null, 'id')

  it('should render', () => {
    const { container } = render(
      <MockStore>
        <CreateQuestions />
      </MockStore>
    )
    expect(container).toMatchSnapshot()
  })

  it('should add a question', async () => {
    const { container, getByRole } = render(
      <MockStore>
        <CreateQuestions />
      </MockStore>
    )

    const questionInput = getById(container, 'question')
    const answerInput = getById(container, 'answer')
    const button = getByRole('button')

    fireEvent.input(questionInput!, 'question 1')
    fireEvent.input(answerInput!, 'answer 1')

    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() => {
      expect(questionInput).toHaveValue('')
      expect(answerInput).toHaveValue('')
    })
  })
})
