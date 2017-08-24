import React from 'react'
import {renderComponent, renderShallowComponent, getProps, simulateClick} from '../../utils/testHelper'
import AppFloatingActionButton from './AppFloatingActionButton'
import IconMail from 'material-ui-icons/Mail'
import IconMemory from 'material-ui-icons/Memory'
import IconMenu from 'material-ui-icons/Menu'

import ReactTestUtils from 'react-dom/test-utils'
import ReactDom from 'react-dom'

import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'

describe('AppFloatingActionButton', () => {
  let variable = 0
  let element = null
  let icons = []
  let colors = ['primary', 'accent', 'default']
  let actions = [
    () => {
      return 4
    },
    () => {
      return true
    },
    () => {
      return 'Zażółć gęślą jaźń.'
    },
  ]

  beforeEach(() => {
    variable = 0;
    element = <AppFloatingActionButton/>
    icons.push(<IconMail/>)
    icons.push(<IconMemory/>)
    icons.push(<IconMenu/>)
  })

  it('can render without error', () => {

    expect(() => {
      const component = renderComponent(element)
    }).not.to.throw()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(AppFloatingActionButton.defaultProps).map(key => {
      expect(props[key]).to.equal(AppFloatingActionButton.defaultProps[key])
    })
  })

  it('change props when set', () => {
    icons.map(icon => {
      colors.map(color => {
        actions.map(action => {
          const component = renderComponent(<AppFloatingActionButton icon={icon} color={color} action={action}/>)
          const props = getProps(component)
          expect(props.icon).to.equal(icon)
          expect(props.color).to.equal(color)
          expect(props.action()).to.equal(action())
        })
      })
    })
  })

  it('runs proper action on click', () => {

    // Problems, problems, problems.

    // const wrapper = mount(<AppFloatingActionButton action={() => { variable = 100 }}/>)
    //
    // const node = ReactDom.findDOMNode(
    //   ReactTestUtils.findRenderedDOMComponentWithTag(
    //     wrapper.instance(), 'button'
    //   )
    // );
    // ReactTestUtils.Simulate.touchTap(node);

    //
    // // const component = renderComponent(element)
    // const component = ReactTestUtils.renderIntoDocument(element)
    // // const node = ReactDom.findDOMNode(
    // //   ReactTestUtils.findRenderedDOMComponentWithTag(
    // //     component.instance(), 'button'
    // //   )
    // // );
    // ReactTestUtils.Simulate.touchTap(component);
  })
})
