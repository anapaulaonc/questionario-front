import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

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
    <div className="ForYou">
      <NavBar />
      {surveys.map((s) => {
        return (
          <div
            key={s.id}
            onClick={() => {
              choosepath.push(`/questionario/${s.id}`);
            }}
          >
            <h3>{s.title}</h3>
            <h5>por: {s.user.email}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default ForYou;
