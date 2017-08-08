/**
 * Login.spec.js
 */
import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../utils/testHelper'
import {lorem} from 'faker'
import {expect} from 'chai'

import Login from './Login'

describe('Login (container)', () => {

  let element = null

  beforeEach(() => {
    element = <Login/>
  })

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(element)
    }).not.to.throw()
  })
})
