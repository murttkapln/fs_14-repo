import { useLocation, useNavigate, useParams } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userId } = useParams();
  // console.log(state);
  return (
    <div className="row text-center">
      <div className=" col">
        <p className="text-danger fw-bolder"> {userId}</p>
        <img src={state.avatar} alt="" />
        <p>
          {state.first_name} {state.last_name}
        </p>
        <button className="btn btn-danger me-3" onClick={() => navigate(-1)}>Go Back</button>
        <button className="btn btn-success" onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default PersonDetail;
