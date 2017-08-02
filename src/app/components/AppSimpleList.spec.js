import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import {AppSimpleList} from '../components'
import {lorem} from 'faker'

describe('AppSimpleList', () => {

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(<AppSimpleList/>)
    }).not.toThrow()
  })

  it('has properly set default title', () => {

    const title = AppSimpleList.defaultProps.title
    const element = <AppSimpleList/>

    const component = renderComponent(element)
    const props = getProps(component)
    expect(props.title).toBe(title)
  })

  it('has proper title when set', () => {

    let i = 10;
    let titles = ['Zażółć gęślą jaźń'];

    while(i-- > 0) {
      titles.push(lorem.sentence())
    }

    titles.map(title => {
      const element = <AppSimpleList title={title}/>

      const component = renderComponent(element)
      const props = getProps(component)
      expect(props.title).toBe(title)
    })
  })
})
