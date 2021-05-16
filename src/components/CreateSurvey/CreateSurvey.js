import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CreateSurvey() {
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [discursiveQuestion, setDiscursiveQuestion] = useState([]);
  const [booleanQuestion, setBooleanQuestion] = useState([]);
  const [alternativeQuestion, setAlternativeQuestion] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/surveys/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
  }, []);

  function saveSurvey(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/surveys/${id}`, { title: title })
      .then((res) => {
        console.log(res.data.title);
      })
      .catch(() => {
        console.log("ERRAAAADO dentro do catch");
      });
    discursiveQuestion.forEach((d) => {
      axios
        .post("http://localhost:3001/discursive_questions", {
          survey_id: id,
          title: d.title,
        })
        .then((res) => {
          console.log("questao discursiva salva: ", res.data);
        })
        .catch(() => {
          console.log("ERRAAAADO dentro do catch");
        });
    });

    booleanQuestion.forEach((b) => {
      axios
        .post("http://localhost:3001/boolean_questions", {
          survey_id: id,
          title: b.title,
          answer: b.answer,
        })
        .then((res) => {
          console.log("questao boolean salva: ", res.data);
        })
        .catch(() => {
          console.log("ERRAAAADO dentro do catch");
        });
    });

    alternativeQuestion.forEach((a) => {
      axios
        .post("http://localhost:3001/alternative_questions", {
          survey_id: id,
          title: a.title,
          questionA: a.questionA,
          questionB: a.questionB,
          questionC: a.questionC,
          questionD: a.questionD,
        })
        .then((res) => {
          console.log("questao alternativa salva: ", res.data);
        })
        .catch(() => {
          console.log("ERRAAAADO dentro do catch");
        });
    });
  }

  const addDiscursive = () => {
    setDiscursiveQuestion((d) => [...d, { title: "" }]);
  };

  const addBoolean = () => {
    setBooleanQuestion((b) => [...b, { title: "", answer: null }]);
  };

  const addAlternative = () => {
    setAlternativeQuestion((a) => [
      ...a,
      { title: "", questionA: "", questionB: "", questionC: "", questionD: "" },
    ]);
  };

  const changeInput = (index, type, field, value) => {
    let newArray = [];
    switch (type) {
      case "discursive":
        newArray = [...discursiveQuestion];
        newArray[index][field] = value;
        setDiscursiveQuestion(newArray);
        break;
      case "boolean":
        newArray = [...booleanQuestion];
        newArray[index][field] = value;
        setBooleanQuestion(newArray);
        break;
      case "alternative":
        newArray = [...alternativeQuestion];
        newArray[index][field] = value;
        setAlternativeQuestion(newArray);
        break;
      default:
        break;
    }
    console.log(newArray);
  };

  return (
    <div>
      <h1>Cria Questionario</h1>
      <input
        name="title"
        value={title}
        type="title"
        text="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <button onClick={(e) => changeTitle(e)} > Escreva o titulo </button> */}
      <br />
      {discursiveQuestion.map((d, i) => {
        return (
          <input
            key={i}
            placeholder="Titulo da questão discursiva"
            onChange={(e) =>
              changeInput(i, "discursive", "title", e.target.value)
            }
            value={d.title}
          />
        );
      })}
      <br />
      <button onClick={addDiscursive} type="button">
        Adicionar questao discursiva
      </button>
      <br />
      {booleanQuestion.map((b, i) => {
        return (
          <input
            key={i}
            placeholder="Titulo da questão booleana"
            onChange={(e) => changeInput(i, "boolean", "title", e.target.value)}
            value={b.title}
          />
        );
      })}
      <br />
      <button onClick={addBoolean} type="button">
        Adicionar questao booleana
      </button>
      <br />
      {alternativeQuestion.map((a, i) => {
        return (
          <React.Fragment key={i}>
            <input
              placeholder="Titulo da questão alternativa"
              onChange={(e) =>
                changeInput(i, "alternative", "title", e.target.value)
              }
              value={a.title}
            />
            <input
              placeholder="Alternativa A"
              onChange={(e) =>
                changeInput(i, "alternative", "questionA", e.target.value)
              }
              value={a.questionA}
            />
            <input
              placeholder="Alternativa B"
              onChange={(e) =>
                changeInput(i, "alternative", "questionB", e.target.value)
              }
              value={a.questionB}
            />
            <input
              placeholder="Alternativa C"
              onChange={(e) =>
                changeInput(i, "alternative", "questionC", e.target.value)
              }
              value={a.questionC}
            />
            <input
              placeholder="Alternativa D"
              onChange={(e) =>
                changeInput(i, "alternative", "questionD", e.target.value)
              }
              value={a.questionD}
            />
          </React.Fragment>
        );
      })}
      <br />
      <button onClick={addAlternative} type="button">
        Adicionar questao alternativa
      </button>
      <br />
      <button onClick={saveSurvey}> Criar Questionario</button>
    </div>
  );
}

export default CreateSurvey;
