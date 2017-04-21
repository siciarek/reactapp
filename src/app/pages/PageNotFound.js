import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import {grey400} from 'material-ui/styles/colors';

class PageNotFound extends React.Component {

  render() {
    const iconStyle = {
      fontSize: '8em',
      color: grey400,
    }
    return (
      <div className="container page-not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
        <br/>
        <FontIcon style={iconStyle} className="material-icons">error_outline</FontIcon>
      </div>
    )
  }
}


export default PageNotFound