import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import {grey400} from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';

const iconFontSize = '10em'

class PageNotFound extends React.Component {

  render() {
    const iconStyle = {
      fontSize: iconFontSize,
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