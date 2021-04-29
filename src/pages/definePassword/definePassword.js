import React, { useState } from "react"
import axios from "axios"

import Input from "../../components/Input/Input"

export default function DefinePassword() {

    return(
        <>
        <div className = "Container">
          <div className="row w-100 h-100">
            <div className="col-6 logo-section">
                    <h3>Questionários.com</h3>
            </div>
            <div className="col-6 input-section">
                <h3>D</h3>
                <form>
                    <Input name= "email" id="email" type="email" placeholder="Email"/>
                    <button type= "submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
          </div>
        </div>
        </>
    )
}