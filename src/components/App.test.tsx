import React from 'react'
import { render } from '@testing-library/react'
import App from 'components/App'
import MockStore from 'test/utils/MockStore'

describe('App', () => {
  it('should render', () => {
    const { getByText } = render(
      <MockStore>
        <App />
      </MockStore>
    )
    expect(getByText(/Q & A Application/)).toBeInTheDocument()
  })
})
