import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import Blank from './Blank'

describe('Blank', () => {
  let element = null

  beforeEach(() => {
    element = <Blank/>
  })

  it('can render without error', () => {
    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(Blank.defaultProps).map(key => {
      expect(props[key]).toBe(Blank.defaultProps[key])
    })
  })
})
