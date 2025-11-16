import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || senha === "") {
      alert("Por favor, preencha todos os campos!");
    } else {
      alert(`Bem-vindo(a), ${email}!`);
    }
  };

  const handleGoogleLogin = () => {
    alert("Login com o Google (em desenvolvimento)");
  };

  return (
    <div className="login-container">
      <h2>Galeria Jovem</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit" className="btn-entrar">
          Entrar
        </button>

        <button
          type="button"
          className="btn-google"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="google-icon" />
          Entrar com o Google
        </button>

        <div className="links">
          <a href="#">Esqueci minha senha</a>
          <a href="#">Criar conta</a>
        </div>
      </form>
    </div>
  );
}

export default Login;