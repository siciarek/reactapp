import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import ReactTestRenderer from 'react-test-renderer/shallow'


import Header from './Header'

describe('Header', () => {

  it('properly renders with default title', () => {
    let component, element

    const header = <Header/>

    expect(function () {
      component = ReactTestUtils.renderIntoDocument(header)
    }).not.toThrow()
  })

  it('properly renders with given title', () => {
    let component, element

    const header = <Header title="Zażółć gęślą jaźń"/>

    expect(function () {
      component = ReactTestUtils.renderIntoDocument(header)
    }).not.toThrow()
  })
})
