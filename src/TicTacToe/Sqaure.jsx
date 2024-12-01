
import React from 'react'

const Sqaure = (props) =>  {
  return (
    <div 
        onClick={props.onClick}
          style={{border:"1px solid", 
          height:"100px", 
          width: "100%", 
          display:"flex", 
          justifyContent: "center",
          alignItems: "center"}}
    >
      <h5>{props.value}</h5>
    </div>
  )
}

export default Sqaure
