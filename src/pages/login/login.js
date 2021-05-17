import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input/Input";
import "./login.css";

export default function Login() {
  let choosepath = useHistory();
  const [err1, setErr1] = useState("");
  const login = (event) => {
    event.preventDefault();
    const [email, password] = Array.from(event.target.elements).map(
      (el) => el.value
    );
    axios
      .post("http://localhost:3001/auth/login", { email, password })
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("token", response.data?.token);
          localStorage.setItem("id", response.data?.id);
          localStorage.setItem("email", response.data?.email);
          choosepath.push("/foryou");
        }
      })
      .catch((err) => {
        setErr1("Email ou senha estão incorretos");
      });
  };

  return (
    <>
      <div className="login-page">
        <div className="logo-section">
          <div className="logo">
            <h1 className="up-logo">Questionários</h1>
            <h1 className="down-logo">.com</h1>
          </div>
        </div>
        <div className="input-section">
          <div className="login-block">
            <h1>Login</h1>
            <form className="form--login" onSubmit={login}>
              <Input name="email" id="email" type="email" placeholder="Email" />
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Senha"
                err={err1}
              />
              <button type="submit" class="btn btn-primary">
                Entrar
              </button>
              <button
                class="btn btn-primary"
                onClick={() => choosepath.push("/signUp")}
              >
                Cadastre-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
