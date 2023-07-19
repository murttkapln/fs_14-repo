import { useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  let { state:person } = useLocation();
  let navigate  = useNavigate()
  console.log(person);
  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div className="text-center">
        <button className="btn btn-danger" onClick={()=>navigate("/")}>Go Home</button>
        <button className="btn btn-success " onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default PersonDetail;
