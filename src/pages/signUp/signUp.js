import React, { useState } from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

import "./signUp.css"

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

export default function Login() {
    let choosepath = useHistory()  
    const [err1, setErr1] = useState('');
    const [err2, setErr2] = useState('');
    const [err3, setErr3] = useState('');
    const login = (event) => {
        event.preventDefault();
        const [email, password, password_confirmation] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        console.log("alguma coisa", email, password, password_confirmation);
        axios
            .post("http://localhost:3001/users", {user:{email, password, password_confirmation}})
            .then(response => {
                if(response.status == 201){
                    choosepath.push("/foryou")
                }
            })
            .catch(err =>{
                console.log(err.response);
                setErr1('')
                setErr2('')
                if(err.response.data.email){
                    setErr1(err.response.data.email[0]);
                    
                }
                if(err.response.data.password){
                    setErr2(err.response.data.password[0]);
                }
                if(err.response.data.password_confirmation){
                    setErr3(err.response.data.password_confirmation[0]);
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
                        <Input name= "email" id="email" type="email" placeholder="Email" err={err1}/>
                        <Input name= "password" id="password" type="password" placeholder="Senha" err={err2}/>
                        <Input name= "password_confirmation" id="password_confirmation" type="password" placeholder="Confirmar senha" err={err3}/>
                        <Button text = "cadastrar" type= "submit"/>
                    </form>
                </div>
            </div>    
        </div>
        </>
    )
}