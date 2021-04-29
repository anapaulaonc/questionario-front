import React, { useState } from "react"
import axios from "axios"



import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

export default function RecoverPassword() {
    const login = (event) => {
        event.preventDefault();
        const [email, password, password_confirmation] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        console.log("Email: ", email);
        console.log("Nova senha: ", password);
        console.log("Confirmação da nova senha: ", password_confirmation);

    }
    
    return(
        <>
        <div className = "container--recover">
            <form>
            <Input name= "email" id="email" type="email" placeholder="Email"/>
            <Input name= "password" id="password" type="password" placeholder="Nova senha"/>
            <Input name= "password_confirmation" id="password_confirmation" type="password" placeholder="Confirmar nova senha"/>
            
            </form>
        </div>
        </>
    )
}