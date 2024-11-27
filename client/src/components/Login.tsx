import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate pour la redirection
import "./Login.css";

// Simulation d'une base de données
const usersData = [
  { username: "Samy", password: "Samy123" },
  { username: "Eric", password: "Eric123" },
  { username: "Seb", password: "Seb123" },
  { username: "Sims", password: "Sims123" },
];

function Login() {
  const [username, setUsername] = useState<string>(""); // Typage explicite
  const [password, setPassword] = useState<string>("");
  const [isOnline, setIsOnline] = useState<boolean>(false); // État modifiable
  const navigate = useNavigate(); // Initialiser le hook navigate

  // Fonction de validation des identifiants
  const validateCredentials = (username: string, password: string): boolean => {
    // Vérifie si le nom d'utilisateur et le mot de passe correspondent à un utilisateur dans les données simulées
    return usersData.some(
      (user) => user.username === username && user.password === password,
    );
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation des identifiants
    if (username && password) {
      if (validateCredentials(username, password)) {
        setIsOnline(!isOnline); // Mettre à jour l'état "en ligne"
        alert("Connexion réussie !");
        navigate("/games"); // Redirection après succès
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
            src="src/assets/images/login.png" // Utilisation d'un chemin relatif public (sans 'src')
            alt="Logo de connexion"
          />
        </button>
      </form>

      {/* Affichage du statut en ligne */}
      <div className="status">
        {isOnline ? (
          <p id="online-status">
            <img src="src\assets\images\dragon_online.png" alt="dragon_vert" />
            Online
          </p>
        ) : (
          <p id="offline-status">
            <img
              src="src\assets\images\dragon_offline.png"
              alt="dragon_rouge"
            />
            Offline
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
