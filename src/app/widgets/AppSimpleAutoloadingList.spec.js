import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import {AppSimpleAutoloadingList} from '../widgets'
import {lorem} from 'faker'
import {map} from 'lodash'
import {expect} from 'chai'

describe('AppSimpleAutoloadingList', () => {

  let element = null

  beforeEach(() => {
    element = <AppSimpleAutoloadingList/>
  })

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(element)
    }).not.to.throw()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    map(element.defaultProps, (val, key) => {
      expect(props[key]).to.equal(val)
    })
  })
})
