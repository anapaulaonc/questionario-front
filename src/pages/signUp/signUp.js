import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./signUp.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function Login() {
  let choosepath = useHistory();
  const [err1, setErr1] = useState("");
  const [err2, setErr2] = useState("");
  const [err3, setErr3] = useState("");
  const login = (event) => {
    event.preventDefault();
    const [email, password, password_confirmation] = Array.from(
      event.target.elements
    ).map((el) => el.value);
    console.log("alguma coisa", email, password, password_confirmation);
    axios
      .post("http://localhost:3001/users", {
        user: { email, password, password_confirmation },
      })
      .then((response) => {
        if (response.status == 201) {
          choosepath.push("/foryou");
        }
      })
      .catch((err) => {
        console.log(err.response);
        setErr1("");
        setErr2("");
        if (err.response.data.email) {
          setErr1(err.response.data.email[0]);
        }
        if (err.response.data.password) {
          setErr2(err.response.data.password[0]);
        }
        if (err.response.data.password_confirmation) {
          setErr3(err.response.data.password_confirmation[0]);
        }
      });
  };

  return (
    <>
      <div className="signup-page">
        <div className="logo-section">
          <div className="logo">
            <h1 className="up-logo">Questionários</h1>
            <h1 className="down-logo">.com</h1>
          </div>
        </div>
        <div className="input-section">
          <div className="signup-block">
            <h1>Cadastre-se</h1>
            <form className="form--signup" onSubmit={login}>
              <Input
                name="email"
                id="email"
                type="email"
                text="Email"
                placeholder="Digite seu email"
                err={err1}
              />
              <Input
                name="password"
                id="password"
                type="password"
                text="Senha"
                placeholder="Digite sua senha"
                err={err2}
              />
              <Input
                name="password_confirmation"
                id="password_confirmation"
                type="password"
                text="Confirmar senha"
                placeholder="Confirme sua senha"
                err={err3}
              />
              <Button text="cadastrar" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
