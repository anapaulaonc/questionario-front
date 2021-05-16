import React, { Component, useState } from "react";
import axios from "axios";
import create_quest_icon from "../../assets/create-quest-icon.svg";
import notification_icon from "../../assets/notification-icon.svg";
import profile_icon from "../../assets/profile-icon.svg";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

function NavBar() {
  const [err1, setErr1] = useState("");
  const createSurvey = (event) => {
    console.log("ERRAAAADO");
    event.preventDefault();
    var token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/surveys",
        { title: "untitled" },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res.data);
        choosepath.push(`/criarquestionario/${res.data.id}`);
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
        setErr1("Oops deu errado");
      });
  };

  let choosepath = useHistory();
  return (
    <div className="NavBar">
      <div className="icons">
        <img src={profile_icon}></img>
      </div>
      <div className="icons" onClick={createSurvey}>
        <img src={create_quest_icon}></img>
      </div>
      <div className="icons">
        <img src={notification_icon}></img>
      </div>
    </div>
  );
}

export default NavBar;
