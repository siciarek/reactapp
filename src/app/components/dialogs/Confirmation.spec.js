import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../../utils/testHelper'
import Confirmation from './Confirmation'

describe('Dialog Confirmation', () => {
  let element = null

  beforeEach(() => {
    element = <Confirmation/>
  })

  it('can render without error', () => {

    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has set default props', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(Confirmation.defaultProps).map(key => {
      expect(props[key]).toBe(Confirmation.defaultProps[key])
    })
  })
})
