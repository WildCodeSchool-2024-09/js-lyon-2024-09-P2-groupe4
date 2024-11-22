import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate pour la redirection
import "./Login.css";
import "../assets/images/login.png";

function Login() {
  // Déclaration des états
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialiser le hook navigate

  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Logique de validation (ici, on suppose que la connexion est réussie)
    if (username && password) {
      // Si les champs sont remplis, rediriger vers la page de jeux
      navigate("/games"); // Rediriger vers "/games"
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div className="div-form">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="form">
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
            alt="Logo de connexion"
          />
        </button>
      </form>
    </div>
  );
}

export default Login;
