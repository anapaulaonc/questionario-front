import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

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
    <div>
      <NavBar />
      <h1>Dados dos questionarios criados por mim:</h1>

      {surveys.map((s) => {
        return (
          <div>
            <h2>{s.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ProfilePage;
