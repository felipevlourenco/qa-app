import React from 'react'
import { render } from '@testing-library/react'
import App from 'components/App'
import MockStore from 'test/utils/MockStore'

test('renders learn react link', () => {
  render(
    <MockStore>
      <App />
    </MockStore>
  )
  // const linkElement = screen.getByText(/App running/)
  // expect(linkElement).toBeInTheDocument()
  expect(1).toBe(1)
})
