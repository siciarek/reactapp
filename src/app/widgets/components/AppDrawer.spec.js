import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../../utils/testHelper'
import {AppDrawer} from '../components'

describe('AppDrawer (component)', () => {
  let element = null

  beforeEach(() => {
    element = <AppDrawer/>
  })

  it('can render without error', () => {

    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(AppDrawer.defaultProps).map(key => {
      expect(props[key]).toBe(AppDrawer.defaultProps[key])
    })
  })
})
