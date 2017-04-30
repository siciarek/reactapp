import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import ReactTestRenderer from 'react-test-renderer'


import Header from './Header'

describe('Header', () => {

  it('properly renders with default title', () => {
    const header = <Header/>

    ReactTestUtils.renderIntoDocument(header)
    ReactTestUtils.isCompositeComponentWithType(header, Header)
  })

  it('properly renders with given title', () => {
    const header = <Header title="Zażółć gęślą jaźń"/>

    ReactTestUtils.renderIntoDocument(header)
    ReactTestUtils.isCompositeComponentWithType(header, Header)
  })
})
