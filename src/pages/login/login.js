import React from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import Input from "../../components/Input/Input"
import './login.css'

export default function Login() {
    let choosepath = useHistory()  
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
        <div className = "Container">
            <div className ="row login">
                <div className="col-6 logo-section">
                    <h3>Questionários.com</h3>
                </div>
                <div className="col-6 input-section">
                    <h1>Login</h1>
                    <form className = "form--login" onSubmit={login}>
                        <Input name= "email" id="email" type="email" placeholder="Email"/>
                        <Input name= "password" id="password" type="password" placeholder="Senha"/>
                        <button type= "submit" class="btn btn-primary" onClick= {() => choosepath.push("/")}>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}