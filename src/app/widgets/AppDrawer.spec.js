import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import {AppDrawer} from '../widgets'

describe('AppDrawer', () => {
  let element = null

  beforeEach(() => {
    element = <AppDrawer/>
  })

  it('can render without error', () => {

    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })
})
