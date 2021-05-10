import React, { useState } from "react"
import axios from "axios"
import Input from "../../components/Input/Input"
import './createSurvey.css'

export default function CreateSurvey() {
    const survey = (event) => {
        event.preventDefault();


        const [title_survey, title_a, select_a, title_c, questionA, questionB, questionC, questionD, select_c, title_d] = Array.from(event.target.elements).map(
            (el) => el.value
        )
        
        axios
            .post("http://localhost:3001/surveys", {survey:{title: title_survey}})
            .then(response => {
                if(response.status == 201){
                    const survey_id = response.data.id
                    axios
                        .post("http://localhost:3001/boolean_questions", {title: title_a, answer: select_a, survey_id})
                        .then(response => {
                            if(response.status == 201){
                                console.log(response.data)
                            }             
                        })
                        .catch(err =>{
                            console.log(err.response.data);
                        })
                    
                    axios
                        .post("http://localhost:3001/alternative_questions", {title: title_c, answer: select_c, survey_id, questionA, questionB, questionC, questionD})
                        .then(response => {
                            if(response.status == 201){
                                console.log(response.data)
                            }             
                        })
                        .catch(err =>{
                            console.log(err.response.data);
                        })
                    
                    axios
                        .post("http://localhost:3001/discursive_questions", {title: title_d, survey_id})
                        .then(response => {
                            if(response.status == 201){
                                console.log(response.data)
                            }             
                        })
                        .catch(err =>{
                            console.log(err.response.data);
                        })


                }     
            })
            .catch(err =>{
                console.log(err.response.data);
            })

        
        
    }
    
    return(
        <>
        <div className = "Container">
            <div className="row create-survey">
                <div className="col-6 logo-section">
                    <h3>Criar Questionário</h3>
                </div>
                <div className="col-6 input-section">
                    <form className = "form--login" onSubmit={survey}>
                        <Input name= "title_survey" id="title_survey" type="text" placeholder="Titulo do quest"/>{/* titulo do Questionário  */}
                        <Input name= "title_a" id="title_a" type="text" placeholder="Titulo da questão tipo a"/>
                        <span>resposta</span>
                        <select name = "select_a">
                            <option value = "true">Verdadeiro</option>
                            <option value = "false">Falso</option>
                        </select>
                        <Input name= "title_c" id="title_c" type="text" placeholder="Titulo da questão tipo c"/>
                        <Input name= "questionA" id="questionA" type="text" placeholder="questao A"/>
                        <Input name= "questionB" id="questionB" type="text" placeholder="questao B"/>
                        <Input name= "questionC" id="questionC" type="text" placeholder="questao C"/>
                        <Input name= "questionD" id="questionD" type="text" placeholder="questao D"/>
                        <span>resposta</span>
                        <select name = "select_c">
                            <option value = "A">A</option>
                            <option value = "B">B</option>
                            <option value = "C">C</option>
                            <option value = "D">D</option>
                        </select>
                        <br/>
                        <Input name= "title_d" id="title_d" type="text" placeholder="Titulo da questão tipo D"/>
                        <button type= "submit" class="btn btn-primary">Criar</button>
                        

                        
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}