import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import AppHeader from './AppHeader'

describe('AppHeader', () => {

  it('can render without error', () => {
    let component, element

    element = React.createElement(AppHeader, {})

    expect(function () {
      component = ReactTestUtils.renderIntoDocument(element)
    }).not.toThrow()

    expect(function () {
      component = ReactTestUtils.renderIntoDocument(<AppHeader/>)
    }).not.toThrow()
  })

  it('has a proper default title', () => {

    let component = ReactTestUtils.renderIntoDocument(<AppHeader/>)
    expect(component.props.title).toBe('…')
  })
})
