import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "./SurveyForm.css";

function SurveyForm() {
  let choosepath = useHistory();
  let { id } = useParams();
  const [survey, setSurvey] = useState({});
  const [user, setUser] = useState({});
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

  function saveSurvey(event) {
    event.preventDefault();

    discursiveQuestion.forEach((d) => {
      axios
        .post("http://localhost:3001/discursive_answers", {
          survey_id: survey.id,
          text: d.text,
          discursive_question_id: d.id,
          email: user?.email ?? "",
        })
        .then((res) => {
          console.log("resposta discursiva salva: ", res.data);
          choosepath.push("/foryou");
        })
        .catch(() => {
          console.log("ERRAAAADO dentro do catch");
        });
    });

    booleanQuestion.forEach((b) => {
      axios
        .post("http://localhost:3001/boolean_answers", {
          survey_id: survey.id,
          answer: b.answer,
          boolean_question_id: b.id,
          email: user?.email ?? "",
        })
        .then((res) => {
          console.log("resposta boolean salva: ", res.data);
        })
        .catch(() => {
          console.log("ERRAAAADO dentro do catch");
        });
    });

    alternativeQuestion.forEach((a) => {
      axios
        .post("http://localhost:3001/alternative_answers", {
          survey_id: survey.id,
          text: a.text,
          alternative_question_id: a.id,
          email: user?.email ?? "",
        })
        .then((res) => {
          console.log("resposta alternativa salva: ", res.data);
        })
        .catch(() => {
          console.log("ERRAAAADO dentro do catch");
        });
    });
  }

  const addDiscursive = (text, index) => {
    var aux = discursiveQuestion;
    aux[index] = { text: text, id: aux[index].id };
    setDiscursiveQuestion(aux);
    console.log(aux);
  };

  const addBoolean = (answer, index) => {
    var aux = booleanQuestion;
    aux[index] = { answer: answer, id: aux[index].id };
    setBooleanQuestion(aux);
    console.log(aux);
  };

  const addAlternative = (text, index) => {
    var aux = alternativeQuestion;
    aux[index] = { text: text, id: aux[index].id };
    setAlternativeQuestion(aux);
    console.log(aux);
  };

  return (
    <div className="survey-form-section">
      <div className="survey-form-main">
        <h1>{survey.title}</h1>
        <p className="survey-autor">Por: {user.email}</p>

        {survey?.set_alternative_question?.map((question, index) => {
          return (
            <div key={question?.id}>
              <h2>{question.title}</h2>
              <div>
                <div className="question-alternative">
                  <input
                    type="radio"
                    value={question?.questionA}
                    onChange={(e) => addAlternative(e.target.value, index)}
                    checked={
                      alternativeQuestion.filter(
                        (e) => e?.text === question?.questionA
                      ).length > 0
                    }
                  />
                  <label>{question?.questionA}</label>
                </div>
                <div className="question-alternative">
                  <input
                    type="radio"
                    value={question?.questionB}
                    onChange={(e) => addAlternative(e.target.value, index)}
                    checked={
                      alternativeQuestion.filter(
                        (e) => e?.text === question?.questionB
                      ).length > 0
                    }
                  />
                  <label>{question?.questionB}</label>
                </div>
                <div className="question-alternative">
                  <input
                    type="radio"
                    value={question?.questionC}
                    onChange={(e) => addAlternative(e.target.value, index)}
                    checked={
                      alternativeQuestion.filter(
                        (e) => e?.text === question?.questionC
                      ).length > 0
                    }
                  />
                  <label>{question?.questionC}</label>
                </div>
                <div className="question-alternative">
                  <input
                    type="radio"
                    value={question?.questionD}
                    onChange={(e) => addAlternative(e.target.value, index)}
                    checked={
                      alternativeQuestion.filter(
                        (e) => e?.text === question?.questionD
                      ).length > 0
                    }
                  />
                  <label>{question?.questionD}</label>
                </div>
              </div>
            </div>
          );
        })}

        {survey?.set_discursive_question?.map((question, index) => {
          return (
            <div key={question?.id}>
              <h2>{question.title}</h2>
              <div>
                <textarea
                  onChange={(e) => addDiscursive(e.target.value, index)}
                >
                  {" "}
                </textarea>
              </div>
            </div>
          );
        })}

        {survey?.set_boolean_question?.map((question, index) => {
          return (
            <div key={question?.id}>
              <h2>{question.title}</h2>
              <div>
                <select onChange={(e) => addBoolean(e.target.value, index)}>
                  <option value={true}>Verdadeiro</option>
                  <option value={false}>Falso</option>
                </select>
              </div>
            </div>
          );
        })}
        <button onClick={saveSurvey}> Enviar Respostas</button>
      </div>
    </div>
  );
}

export default SurveyForm;
