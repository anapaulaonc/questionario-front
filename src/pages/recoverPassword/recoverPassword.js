import React, { useState } from "react"
import axios from "axios"



import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

export default function RecoverPassword() {
    const recover = (event) => {
        event.preventDefault();
        const [email] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        axios
            .post("http://localhost:3001/login/forgot_password", {email})
            .then(response => {
                if(response.status == 200){
                    choosepath.push("/foryou")
                }
            })
            .catch(err =>{
                setErr1("Email está incorreto")
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
                <h3>Digite o email que deseja recuperar a senha:</h3>
                <form onSubmit={recover}>
                    <Input name= "email" id="email" type="email" placeholder="Email"/>
                    <button type= "submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
          </div>
        </div>
        </>
    )
}