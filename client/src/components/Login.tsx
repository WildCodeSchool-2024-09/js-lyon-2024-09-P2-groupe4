import { useState } from "react";
import "./Login.css";
import "../assets/images/login.png";

function Login() {
  //states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Comportement

  // affichage
  return (
    <>
      <div className="div-form">
        <h1>Login Page</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="form"
        >
          <h2>USERNAME</h2>
          <input
            type="text"
            className="username"
            placeholder="Votre nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h2>Password</h2>
          <input
            type="password"
            className="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-login" type="submit">
            <img
              className="login-logo"
              src="src/assets/images/login.png"
              alt=""
            />
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
