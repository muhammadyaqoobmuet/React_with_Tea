import React from 'react'
import '../../../src/index.css'
function Alert({type,msg}) {
  return (
    <div>
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  )
}

export default Alert
