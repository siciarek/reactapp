import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import ConfigInfo from './ConfigInfo'

describe('ConfigInfo', () => {
  let element = null

  beforeEach(() => {
    element = <ConfigInfo/>
  })

  it('can render without error', () => {
    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(ConfigInfo.defaultProps).map(key => {
      expect(props[key]).toBe(ConfigInfo.defaultProps[key])
    })
  })
})
