import React from 'react'

const Alert = (props) => {
  const { children, color } = props;

  return (
   <>
      <div style={{ color: color, textAlign: "start" }}>{children}</div>
   </>
  )
}

export default Alert