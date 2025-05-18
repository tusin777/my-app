import HomePage from "../../pages/HomePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Меня нажали");
  };
  return (
    <>
      <main className="app">
        <Header />
        <HomePage click={handleClick} />
        <Footer />
      </main>
    </>
  );
}

export default App;
