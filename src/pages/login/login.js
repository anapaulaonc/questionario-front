import React, { useState } from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import Input from "../../components/Input/Input"
import './login.css'

export default function Login() {
    let choosepath = useHistory()
    const [err1, setErr1] = useState(''); 
    const login = (event) => {
        event.preventDefault();
        const [email, password] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        axios
            .post("http://localhost:3001/auth/login", {email, password})
            .then(response => {
                if(response.status == 200){
                    choosepath.push("/foryou")
                }
            })
            .catch(err =>{
                setErr1("Email ou senha estão incorretos")
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
                        <Input name= "email" id="email" type="email" placeholder="Email" err={err1}/>
                        <Input name= "password" id="password" type="password" placeholder="Senha"/>
                        <button type= "submit" class="btn btn-primary">Entrar</button>
                        <button class="btn btn-primary"  onClick= {() => choosepath.push("/signUp")}>Cadastre-se</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}