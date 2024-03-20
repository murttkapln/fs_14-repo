import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

//? SCSS stylesheet 'i import ettik
import "./scss/app.scss"

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;