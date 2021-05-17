import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./profile.css";

function ProfilePage() {
  let { id } = useParams();
  let choosepath = useHistory();

  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/surveys`)
      .then((res) => {
        console.log(
          res.data.filter(
            (s) => s.user_id.toString() === localStorage.getItem("id")
          )
        );
        setSurveys(
          res.data.filter(
            (s) => s.user_id.toString() === localStorage.getItem("id")
          )
        );
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
  }, []);

  return (
    <div className="profile-section">
      <NavBar />
      <div className="profile-main">
        <h1>Questionários criados por mim</h1>
        {surveys.map((s) => {
          return (
            <div className="profile-survey">
              <h2>{s.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfilePage;
