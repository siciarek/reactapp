import React from 'react'
import {renderComponent, renderShallowComponent, getProps, simulateClick} from '../../utils/testHelper'
import AppFloatingActionButton from './AppFloatingActionButton'
import IconMail from 'material-ui-icons/Mail'
import IconMemory from 'material-ui-icons/Memory'
import IconMenu from 'material-ui-icons/Menu'

import ReactTestUtils from 'react-dom/test-utils'
import ReactDom from 'react-dom'

describe('AppFloatingActionButton', () => {
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
    element = <AppFloatingActionButton/>
    icons.push(<IconMail/>)
    icons.push(<IconMemory/>)
    icons.push(<IconMenu/>)
  })

  it('can render without error', () => {

    expect(() => {
      const component = renderComponent(element)
    }).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(AppFloatingActionButton.defaultProps).map(key => {
      expect(props[key]).toBe(AppFloatingActionButton.defaultProps[key])
    })
  })

  it('change props when set', () => {
    icons.map(icon => {
      colors.map(color => {
        actions.map(action => {
          const component = renderComponent(<AppFloatingActionButton icon={icon} color={color} action={action}/>)
          const props = getProps(component)
          expect(props.icon).toBe(icon)
          expect(props.color).toBe(color)
          expect(props.action()).toBe(action())
        })
      })
    })
  })

  it('runs proper action on click', () => {
    // const element = <AppFloatingActionButton action={() => console.log('Zażółć gęślą jaźń.')}/>
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
