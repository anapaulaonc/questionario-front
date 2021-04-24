import React from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import Input from "../../components/Input/Input"


export default function Register() {
    let choosepath = useHistory()  
    const createAccount = (event) => {
        event.preventDefault();
        const [email, password] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        axios
            .post("http://localhost:3001/auth/register", {email, password})
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
            <form className = "form--register" onSubmit={createAccount}>
                <Input name= "email" id="email" type="email" placeholder="Email"/>
                <Input name= "password" id="password" type="password" placeholder="Senha"/>
                <Input name= "check-password" id="check-password" type="password" placeholder="Confirmar senha"/>
                <button type= "submit" onClick= {() => choosepath.push("/")}>Entrar</button>
            </form>
        </div>
        </>
    )
}