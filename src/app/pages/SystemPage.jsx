import React from 'react'
import PropTypes from 'prop-types'
import IconErrorOutline from 'material-ui-icons/ErrorOutline'
import IconPanTool from 'material-ui-icons/PanTool'
import IconThumbUp from 'material-ui-icons/ThumbUp'
import IconSmile from 'material-ui-icons/InsertEmoticon'

const icons = {
  error_outline: <IconErrorOutline style={{width: '10em', height: '10em', color: 'silver',}}/>,
  pan_tool: <IconPanTool style={{width: '10em', height: '10em', color: 'silver',}}/>,
  thumb_up: <IconThumbUp style={{width: '10em', height: '10em', color: 'silver',}}/>,
  smile: <IconSmile style={{width: '10em', height: '10em', color: 'silver',}}/>,
}

const SystemPage = ({code, message, icon}) => {

  const i = !icons.hasOwnProperty(icon) ? 'eror_outline' : icon

  return <div className="system-page">
    <h1>{code}</h1>
    <h2>{message}</h2>
    <br/>
    {icons[i]}
  </div>
}

SystemPage.propTypes = {
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

SystemPage.defaultProps = {
  code: 200,
  message: 'OK',
  icon: 'smile'
}

export default SystemPage