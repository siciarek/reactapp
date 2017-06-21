import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import store from '../store'

import AppSpinner from './AppSpinner'

describe('AppSpinner', () => {

  it('can render without error', () => {
    let component, element

    element = React.createElement(AppSpinner, {store})

    expect(function () {
      component = ReactTestUtils.renderIntoDocument(element)
    }).not.toThrow()
  })
})
