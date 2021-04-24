import React from "react"



export default function Input(props) {
    return(
        <div className = "container">
            <label>{props.text}</label>
            <br/>
            <input placeholder={props.placeholder} id={props.id} type={props.type} name={props.name}/>
        </div>
    )
} 