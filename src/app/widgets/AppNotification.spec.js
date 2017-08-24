/**
 * AppNotification.spec.js
 */
import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import {lorem} from 'faker'
import {expect} from 'chai'
import {map} from 'lodash'

import AppNotification from './AppNotification'

describe('AppNotification', () => {

  let element = null

  beforeEach(() => {
    element = <AppNotification/>
  })

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(element)
    }).not.to.throw()
  })
})
