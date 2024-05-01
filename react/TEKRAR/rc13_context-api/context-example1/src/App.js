import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import People from "./pages/People";

function App() {
  return (
    <div className="text-dark">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
