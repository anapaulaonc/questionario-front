import React from "react"
import axios from "axios"

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

export default function Login() {
    const login = (event) => {
        event.preventDefault();
        const [email, password] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        axios
            .post("http://localhost:3001/auth/login", {email, password})
            .then(response => {
                console.log(response)
            })
            .catch(err =>{
                console.log("error", err)
            })
    }

    return(
        <>
        <div className = "container">
            <form className = "form--login" onSubmit={login}>
                <Input name= "email" id="email" type="email" text="Email"/>
                <Input name= "password" id="password" type="password" text="Senha"/>
                <Button text = "Entrar" type= "submit"/>
            </form>
        </div>
        </>
    )
}