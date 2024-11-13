import { useState } from "react";

function Login() {
  //states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Comportement

  // affichage
  return (
    <div className="div-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="form"
      >
        <div className="form-username">
          <h1>USERNAME</h1>
          <input
            type="text"
            className="username"
            placeholder="Votre nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-password">
          <h2>Password</h2>
          <input
            type="password"
            className="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button-login" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
