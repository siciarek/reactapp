/**
 * Dashboard.spec.js
 */
import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../utils/testHelper'
import {lorem} from 'faker'
import {expect} from 'chai'
import {map} from 'lodash'

import Dashboard from './Dashboard'

describe('Dashboard (container)', () => {

  let element = null

  beforeEach(() => {
    element = <Dashboard/>
  })

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(element)
    }).not.to.throw()
  })
})
