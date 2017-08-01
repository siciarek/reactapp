import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import ShallowRenderer from 'react-test-renderer/shallow';
import {Provider} from 'react-redux'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import store from '../app/store'

const renderComponent = (component) => {
  return ReactTestUtils.renderIntoDocument(
    <Provider store={store}>
      <MuiThemeProvider theme={createMuiTheme({})}>
        {component}
      </MuiThemeProvider>
    </Provider>
  )
}

const renderShallowComponent = (element) => {
  const renderer = new ShallowRenderer()
  renderer.render(element)
  return renderer.getRenderOutput();
}

const getProps = (component) => {
  return component.props.children.props.children.props
}

export {renderComponent, renderShallowComponent, getProps}
