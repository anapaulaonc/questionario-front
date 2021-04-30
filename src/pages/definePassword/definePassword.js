import React, { useState } from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

import Input from "../../components/Input/Input"

export default function DefinePassword() {
  const [err, setErr] = useState("")
  let choosepath = useHistory()
  const define = (event) => {
    event.preventDefault();
    const [token, password, email] = Array.from(event.target.elements).map(
        (el) => el.value
    )
    axios
        .post("http://localhost:3001/login/reset_password", {password, token, email})
        .then(response => {
            if(response.status == 200){
                choosepath.push("/")
            }
        })
        .catch(err =>{
            if(err.response.data) {
                setErr(err.response.data.error)
                
            }
        })
  }

    return(
        <>
        <div className = "Container">
          <div className="row w-100 h-100">
            <div className="col-6 logo-section">
                    <h3>Questionários.com</h3>
            </div>
            <div className="col-6 input-section">
                <h3>Digite o token</h3>
                <form onSubmit = {define}>
                    <Input name= "token" id="token" type="token" placeholder="Token"/>
                    <Input name= "password" id="password" type="password" placeholder="Nova Senha"/>
                    <Input name= "email" id="email" type="email" placeholder="Email"/>
                    <button type= "submit" className="btn btn-primary">Confirmar</button>
                </form>
            </div>
          </div>
        </div>
        </>
    )
}