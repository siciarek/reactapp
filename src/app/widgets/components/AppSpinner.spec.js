import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../../utils/testHelper'
import {AppSpinner} from '../components'

describe('AppSpinner (component)', () => {
  let element = null

  beforeEach(() => {
    element = <AppSpinner/>
  })

  it('can render without error', () => {

    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(AppSpinner.defaultProps).map(key => {
      expect(props[key]).toBe(AppSpinner.defaultProps[key])
    })
  })

  it('has params of proper values when set', () => {
    const show = true
    const size = 120
    const element = <AppSpinner show={show} size={size}/>

    const shallow = renderShallowComponent(element)
    expect(shallow.props.style.display).toBe('block')

    const component = renderComponent(element)
    const props = getProps(component)

    expect(props.show).toBe(show)
    expect(props.size).toBe(size)
  })
})
