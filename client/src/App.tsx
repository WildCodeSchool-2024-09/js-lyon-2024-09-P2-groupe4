import "./App.css";
import "./ButtonsBar.css";
import "./CardGame.css";
import "./Footer.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FavoritesList from "./components/FavoritesList";

function App() {
  return (
    <>
      <Header />
      <FavoritesList />
      <Footer />
    </>
  );
}

export default App;
