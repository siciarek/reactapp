import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import AccessForbiden from './AccessForbiden'

describe('AccessForbiden', () => {
  let element = null

  beforeEach(() => {
    element = <AccessForbiden/>
  })

  it('can render without error', () => {
    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(AccessForbiden.defaultProps).map(key => {
      expect(props[key]).toBe(AccessForbiden.defaultProps[key])
    })
  })
})
