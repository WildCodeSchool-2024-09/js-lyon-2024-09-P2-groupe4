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
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </GamesProvider>
  );
}
export default App;
