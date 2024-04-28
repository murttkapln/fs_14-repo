
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import People from "./pages/People";
import Paths from "./pages/Paths";
import PersonDetail from "./components/PersonDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />} />
        <Route path="/people" element={<People />} />
        <Route path="/people:/id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
