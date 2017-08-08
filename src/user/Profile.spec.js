/**
 * Profile.spec.js
 */
import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../utils/testHelper'
import {lorem} from 'faker'
import {expect} from 'chai'

import Profile from './Profile'

describe('Profile (container)', () => {

  let element = null

  beforeEach(() => {
    element = <Profile/>
  })

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(element)
    }).not.to.throw()
  })
})
