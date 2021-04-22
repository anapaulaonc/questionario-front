import React from "react"
import "./Input.css"



export default function Input(props) {
    return(
        <div className = "input-container">
            <input id={props.id} type={props.type} name={props.name} placeholder={props.text}/>
            <span className = "input-error">{props.err}</span>
            <br/>
        </div>
    )
} 