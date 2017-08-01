import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import AppHeader from './AppHeader'

/**
 * For wrapping functional components
 */
class W extends React.Component {
  render() {
    return this.props.children
  }
}

describe('AppHeader', () => {

  it('can render without error', () => {

    expect(function () {
      const component = ReactTestUtils.renderIntoDocument(<W><AppHeader/></W>)
    }).not.toThrow()
  })

  it('has a proper default title', () => {

    const component = ReactTestUtils.renderIntoDocument(<W><AppHeader/></W>).props.children
    expect(component.props.title).toBe('…')
  })

  it('sets a proper custom title', () => {

    const title = 'Zażółć gęślą jaźń'
    const component = ReactTestUtils.renderIntoDocument(<W><AppHeader title={title}/></W>).props.children
    expect(component.props.title).toBe(title)
  })
})
