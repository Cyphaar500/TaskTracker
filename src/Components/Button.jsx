import React from "react";


export default function Button ({text, color, backgroundColor, click}) {

    return <button onClick={click}
           style={{color: color, backgroundColor: backgroundColor}} 
           className="btn">{text}
           </button>
}