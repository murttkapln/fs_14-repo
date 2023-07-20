import { Outlet, useNavigate } from "react-router-dom";
// import About from "../components/About";
// import Courses from "../components/Courses";

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="p-3">
      {/* <About />
      <Courses /> */}
      <h1>Home</h1>
      <button onclick={()=>navigate("/about")}>About</button>
      <Outlet/>
    </div>
  );
};

export default Home;
