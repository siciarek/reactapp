/**
 * Logout.spec.js
 */
import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../utils/testHelper'
import {lorem} from 'faker'
import {expect} from 'chai'

import Logout from './Logout'

describe('Logout (container)', () => {

  let element = null

  beforeEach(() => {
    element = <Logout/>
  })

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(element)
    }).not.to.throw()
  })
})
