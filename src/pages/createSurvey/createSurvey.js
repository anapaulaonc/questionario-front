import React, { useState, checkBox } from "react"
import Input from "../../components/Input/Input"
import './createSurvey.css'

export default function CreateSurvey() {
    
    return(
        <>
        <div className = "">
            <div className="col-6 input-section">
                <h1>Login</h1>
                <form className = "form--login" onSubmit={() => {console.log("nada ainda")}}>
                    <Input name= "title_survey" id="title_survey" type="text" placeholder="Titulo do quest"/>{/* titulo do Questionário  */}
                    <Input name= "title_a" id="title_a" type="text" placeholder="Titulo da questão tipo_a"/>
                    <span>resposta</span>
                    <Input name= "" id="" type="checkbox" placeholder="Email" title={"F"} checked={() => {console.log("pensar em alguma forma de confirmar se está confirmado")}}/>
                    <Input name= "" id="" type="checkbox" placeholder="Email" title={"T"} checked={() => {console.log("pensar em alguma forma de confirmar se está confirmado")}}/>
                    <Input name= "title_c" id="title_c" type="text" placeholder="Titulo da questão tipo_c"/>
                    <Input name= "quest1" id="quest1" type="text" placeholder="questao 1"/>
                    <Input name= "quest2" id="quest2" type="text" placeholder="questao 2"/>
                    <Input name= "quest3" id="quest3" type="text" placeholder="questao 3"/>
                    <Input name= "quest4" id="quest4" type="text" placeholder="questao 4"/>
                    <span>resposta</span>
                    <Input name= "" id="" type="checkbox" placeholder="Email" title={"A"} checked={() => {console.log("pensar em alguma forma de confirmar se está confirmado")}}/>
                    <Input name= "" id="" type="checkbox" placeholder="Email" title={"B"} checked={() => {console.log("pensar em alguma forma de confirmar se está confirmado")}}/>
                    <Input name= "" id="" type="checkbox" placeholder="Email" title={"C"} checked={() => {console.log("pensar em alguma forma de confirmar se está confirmado")}}/>
                    <Input name= "" id="" type="checkbox" placeholder="Email" title={"D"} checked={() => {console.log("pensar em alguma forma de confirmar se está confirmado")}}/>

                    
                </form>
            </div>
        </div>
        </>
    )
}