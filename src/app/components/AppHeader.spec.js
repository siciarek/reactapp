import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import AppHeader from './AppHeader'
import {expect} from 'chai'
import {lorem} from 'faker'

// https://www.npmjs.com/package/faker
// https://facebook.github.io/react/docs/shallow-renderer.html
// http://chaijs.com/api/bdd/

describe('AppHeader', () => {

  let element = null

  beforeEach(() => {
    element = <AppHeader/>
  })

  it('can render without error', () => {
    expect(function () {
      const component = renderComponent(element)
    }).not.to.throw()
  })

  it('has a proper tag and class name', () => {
    const component = renderShallowComponent(element)

    expect(component.type).to.equal('h2')
    expect(component.props.className).to.equal('page-header')
  })

  it('has a proper default title', () => {
    const title = '…'
    const component = renderComponent(element)
    const props = getProps(component)

    expect(props.title).to.equal(title)
  })

  it('sets a proper custom title', () => {
    for(let i = 0; i < 10; i++) {
      const title = lorem.sentence()

      element = <AppHeader title={title}/>
      const component = renderComponent(element)
      const props = getProps(component)

      expect(props.title).to.equal(title)
    }
  })
})
