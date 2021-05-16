import React from "react";
import "./Input.css";

export default function Input(props) {
  return (
    <div className="input-container">
      <input
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.name}
      />
      <span className="input-error">{props.err}</span>
    </div>
  );
}
