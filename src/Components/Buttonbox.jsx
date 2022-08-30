import React from 'react';
import "./Buttonbox.css"

export default function Buttonbox({icon,color}) {
    return (
        <div className="socialIcon" style={{color:color}}>
           <i className={`fa-brands ${icon}`}></i>
        </div>
    )
}
