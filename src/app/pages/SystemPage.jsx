import React from 'react'

import IconErrorOutline from 'material-ui-icons/ErrorOutline'
import IconPanTool from 'material-ui-icons/PanTool'
import IconThumbUp from 'material-ui-icons/ThumbUp'

const icons = {
  error_outline: <IconErrorOutline style={{width: '10em', height: '10em', color: 'silver',}}/>,
  pan_tool: <IconPanTool style={{width: '10em', height: '10em', color: 'silver',}}/>,
  thumb_up: <IconThumbUp style={{width: '10em', height: '10em', color: 'silver',}}/>,
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

export default SystemPage