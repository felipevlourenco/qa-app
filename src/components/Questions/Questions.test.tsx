import { fireEvent, render } from '@testing-library/react'
import Questions from 'components/Questions'
import MockStore from 'test/utils/MockStore'

describe('component/Questions', () => {
  it('should render', () => {
    const { container } = render(
      <MockStore>
        <Questions />
      </MockStore>
    )
    expect(container).toMatchSnapshot()
  })

  it('should delete all questions', () => {
    const { getByRole, getByText } = render(
      <MockStore>
        <Questions />
      </MockStore>
    )
    const list = getByRole('list')
    expect(list).toBeInTheDocument()
    const button = getByText('Delete all questions')
    fireEvent.click(button)
    expect(list).not.toBeInTheDocument()
  })

  // it('should sort questions', () => {
  //   const { } = render(
  //     <MockStore
  //       store={{
  //         ...store,
  //         questions: {
  //           ...store.questions,
  //           data: [
  //             ...store.questions.data,
  //             {
  //               id: 2,
  //               question: 'AAAAA',
  //               answer: 'AAAAA'
  //             }
  //           ]
  //         }
  //       }}>
  //       <Questions />
  //     </MockStore>
  //   )
  // })
})
