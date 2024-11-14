import "./components/DisplayGames.css";
import "./App.css";
import "./header.css";
import "./components/CardGame.css";
import "./components/Footer.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { GamesProvider } from "./components/GamesContext";
import Header from "./components/Header";

function App() {
  return (
    <GamesProvider>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </GamesProvider>
  );
}
export default App;
