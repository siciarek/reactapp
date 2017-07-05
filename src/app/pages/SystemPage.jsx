import React from 'react'

const SystemPage = ({code, message, icon}) =>
  <div className="system-page">
    <h1>{code}</h1>
    <h2>{message}</h2>
    <br/>
    {icon}
  </div>

export default SystemPage