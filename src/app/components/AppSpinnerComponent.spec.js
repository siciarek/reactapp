import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import AppSpinnerComponent from './AppSpinnerComponent'

describe('AppSpinnerComponent', () => {

  it('can render without error', () => {

    expect(function () {
      const component = renderComponent(<AppSpinnerComponent/>)
    }).not.toThrow()
  })

  it('has properly set default params', () => {

    const show = false
    const size = 60
    const element = <AppSpinnerComponent/>

    const shallow = renderShallowComponent(element)
    expect(shallow.props.style.display).toBe('none')

    const component = renderComponent(element)
    const props = getProps(component)

    expect(props.show).toBe(show)
    expect(props.size).toBe(size)
  })

  it('has params of proper values when set', () => {
    const show = true
    const size = 120
    const element = <AppSpinnerComponent show={show} size={size}/>

    const shallow = renderShallowComponent(element)
    expect(shallow.props.style.display).toBe('block')

    const component = renderComponent(element)
    const props = getProps(component)

    expect(props.show).toBe(show)
    expect(props.size).toBe(size)
  })
})
