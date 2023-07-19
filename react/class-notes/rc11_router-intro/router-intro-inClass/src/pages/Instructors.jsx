import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
        {/* //? Absolute path (tam adres vermek) */}
        {/* <Link to="/instructors/1">Instructor-1</Link> */}
        {/* //! Relative path (goreceli adres vermek) */}
        <Link state={{name:"felix"}} to="1">Instructor-1</Link>
        <Link state={{name:"noah"}}  to="2">Instructor-2</Link>
        <Link state={{name:"anthony"}}  to="3">Instructor-3</Link>
      </div>
    </div>
  );
};

export default Instructors;
