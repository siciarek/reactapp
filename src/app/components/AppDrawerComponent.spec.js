import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import AppDrawerComponent from './AppDrawerComponent'

describe('AppDrawerComponent', () => {
  let element = null

  beforeEach(() => {
    element = <AppDrawerComponent/>
  })

  it('can render without error', () => {

    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(AppDrawerComponent.defaultProps).map(key => {
      expect(props[key]).toBe(AppDrawerComponent.defaultProps[key])
    })
  })
})
