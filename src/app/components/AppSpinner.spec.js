import React from 'react'
import {renderComponent, getProps} from '../../utils/testHelper'
import AppSpinner from './AppSpinner'

describe('AppSpinner', () => {

  it('can render without error', () => {

    expect(function () {
      const component = renderComponent(<AppSpinner/>)
    }).not.toThrow()
  })

  it('is hidden when show is set to false', () => {


    const component = renderComponent(<AppSpinner show={false}/>)
    const props = getProps(component)
    expect(props.show).toBe(false)
  })

  it('is visible when show is set to true', () => {

    const component = renderComponent(<AppSpinner show={true}/>)
    const props = getProps(component)
    expect(props.show).toBe(true)
  })
})
