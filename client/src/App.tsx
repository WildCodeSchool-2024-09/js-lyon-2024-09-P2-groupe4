import "./App.css";
import "./ButtonsBar.css";
import "./CardGame.css";
import "./Footer.css";
import FavoritesList from "./components/FavoritesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
