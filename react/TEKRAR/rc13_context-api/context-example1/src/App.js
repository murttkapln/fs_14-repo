import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import People from "./pages/People";
import PrivateRouter from "./pages/PrivateRouter";
import PersonDetail from "./pages/PersonDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="people" element={<PrivateRouter />}>
          <Route path="" element={<People />} />
          <Route path="people" element={<People />} />
          <Route path=":id" element={<PersonDetail />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
