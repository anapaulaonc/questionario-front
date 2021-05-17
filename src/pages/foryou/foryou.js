import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./foryou.css";

function ForYou() {
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/surveys`)
      .then((res) => {
        console.log(res.data);
        setSurveys(res.data);
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
  }, []);
  let choosepath = useHistory();

  return (
    <div className="foryou-section">
      <NavBar />
      <div className="foryou-main">
        {surveys.map((s) => {
          return (
            <div
              className="foryou-survey"
              key={s.id}
              onClick={() => {
                choosepath.push(`/questionario/${s.id}`);
              }}
            >
              <h1>{s.title}</h1>
              <h2>por: {s.user.email}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForYou;
