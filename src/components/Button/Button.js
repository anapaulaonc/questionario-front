import React from "react"



export default function Button(props) {
    return(
        <div className = "container">
            <button type={props.type} className="button" >{props.text}</button>
        </div>
    )
} 