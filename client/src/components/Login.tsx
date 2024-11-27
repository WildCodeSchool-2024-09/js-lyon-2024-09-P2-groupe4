import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const usersData = [
  { username: "Samy", password: "Samy123" },
  { username: "Eric", password: "Eric123" },
  { username: "Seb", password: "Seb123" },
  { username: "Sims", password: "Sims123" },
];

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const navigate = useNavigate();

  // Fonction de validation des identifiants
  const validateCredentials = (username: string, password: string): boolean => {
    // Vérifie si le nom d'utilisateur et le mot de passe correspondent à un utilisateur dans les données simulées
    return usersData.some(
      (user) => user.username === username && user.password === password,
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username && password) {
      if (validateCredentials(username, password)) {
        setIsOnline(!isOnline);
        alert("Connexion réussie !");
        navigate("/games");
      } else {
        alert("Nom d'utilisateur ou mot de passe incorrect");
      }
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

      <div className="status">
        {isOnline ? (
          <p className="online-status">🟢 En ligne</p>
        ) : (
          <p className="offline-status">🔴 Hors ligne</p>
        )}
      </div>
    </div>
  );
}

export default Login;
