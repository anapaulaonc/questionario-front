import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./SurveyData.css";

function SurveyData() {
  let { id } = useParams();
  let choosepath = useHistory();
  const [survey, setSurvey] = useState({});
  const [user, setUser] = useState({});
  const [surveys, setSurveys] = useState([]);
  const [discursiveQuestion, setDiscursiveQuestion] = useState([]);
  const [booleanQuestion, setBooleanQuestion] = useState([]);
  const [alternativeQuestion, setAlternativeQuestion] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/surveys/${id}`)
      .then((res) => {
        console.log(res.data);
        setSurvey(res.data);
        res.data?.set_alternative_question?.forEach((alternative) => {
          setAlternativeQuestion((a) => [
            ...a,
            { text: "", id: alternative.id },
          ]);
        });

        res.data?.set_discursive_question?.forEach((discursive) => {
          setDiscursiveQuestion((d) => [...d, { text: "", id: discursive.id }]);
        });

        res.data?.set_boolean_question?.forEach((boolean) => {
          setBooleanQuestion((b) => [...b, { answer: true, id: boolean.id }]);
        });

        axios
          .get(`http://localhost:3001/users/${res.data?.user_id}`)
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
          });
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
  }, []);

  discursiveQuestion.forEach((d) => {
    axios
      .get("http://localhost:3001/discursive_answers")
      .then((res) => {
        console.log("resposta discursiva salva: ", res.data);
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
  });

  booleanQuestion.forEach((b) => {
    axios
      .get("http://localhost:3001/boolean_answers")
      .then((res) => {
        console.log("resposta boolean salva: ", res.data);
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
  });

  alternativeQuestion.forEach((a) => {
    axios
      .get("http://localhost:3001/alternative_answers")
      .then((res) => {
        console.log("resposta alternativa salva: ", res.data);
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
  });

  return (
    <div>
      <NavBar />
      <h1>Perfil</h1>
      <div>
        <h2>{survey.title}</h2>
      </div>
    </div>
  );
}

export default SurveyData;
