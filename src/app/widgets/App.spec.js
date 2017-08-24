import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import App from './App'

describe('App', () => {
  let element = null

  beforeEach(() => {
    element = <App/>
  })

  it('can render without error', () => {

    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(App.defaultProps).map(key => {
      expect(props[key]).toBe(App.defaultProps[key])
    })
  })
})
