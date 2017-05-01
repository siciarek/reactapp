import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import ReactTestRenderer from 'react-test-renderer/shallow'


import AppSpinner from './AppSpinner'

describe('AppSpinner', () => {

  it('can render without error', () => {
    let component, element

    element = React.createElement(AppSpinner, {})

    expect(function () {
      component = ReactTestUtils.renderIntoDocument(element)
    }).not.toThrow()

    expect(function () {
      component = ReactTestUtils.renderIntoDocument(<AppSpinner/>)
    }).not.toThrow()
  })
})
