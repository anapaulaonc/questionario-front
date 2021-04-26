import React, { useState } from "react"
import axios from "axios"

import "./signUp.css"

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

export default function Login() {
    const [err1, setErr1] = useState('');
    const [err2, setErr2] = useState('');
    const login = (event) => {
        event.preventDefault();
        const [email, password, password_confirmation] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        console.log(email, password, password_confirmation);
        axios
            .post("http://localhost:3001/users", {user:{email, password, password_confirmation}})
            .then(response => {
                console.log(response)
            })
            .catch(err =>{
                console.log(err.response);
                if(err.response.data.email){
                    setErr1(err.response.data.email[0]);
                    console.log(err1)
                }
                if(err.response.data.password){
                    setErr2(err.response.data.password[0]);
                    console.log(err.response)
                }
            })
    }

    return(
        <>
        <div className = "Container">
            <div className ="row login">
                <div className="col-6 logo-section">
                    <h3>Questionários.com</h3>
                </div>
                <div className="col-6 input-section">
                    <h1>Cadastre-se</h1>
                    <form className = "form--signUp" onSubmit={login}>
                        <Input name= "email" id="email" type="email" text="Email" err={err1}/>
                        <Input name= "password" id="password" type="password" text="Senha"/>
                        <Input name= "password_confirmation" id="password_confirmation" type="password" text="Confirmar senha"/>
                        <Button text = "cadastrar" type= "submit"/>
                    </form>
                </div>
            </div>    
        </div>
        </>
    )
}