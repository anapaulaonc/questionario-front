import React from "react"
import './profile.css'
import NavBar from "../../components/NavBar/NavBar"
import Survey from "../../components/Survey/Survey"
const user = {
    name: 'Roberto',
    image: 'https://thiscatdoesnotexist.com/'
}

export default function Profile() {

    return (
        <>
            <NavBar />
            <div className="Container">
            <hr className="Line" />
                <div className="ContentContainer">
                    <div className="ImageContainer">
                        <img className="Image" src={user.image}></img>
                        <h1 className="ProfileName">{user.name}</h1>
                    </div>
                    <div className="SurveyContainer">
                        <Survey />
                        <Survey />
                        <Survey />
                        <Survey />
                    </div>
                </div>



            </div>
        </>
    )
}