import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "../pages/NotFound";
import spinner from "../img/Spinner-2.gif";

const PersonDetail = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log({id});
  // console.log(person);
  // console.log(person);
  useEffect(() => {
    const getPerson = () => {
      axios(`https://reqres.in/api/users/${id}`)
        .then((res) => setPerson(res.data.data))
        .catch((err) => {
          setError(true);
          console.log(err);
        })
        .finally(() => setLoading(false));
    };
    getPerson();
  }, [id]);
  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div className="text-center mt-4">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }
  return (
    <div className="row text-center">
      <div className=" col">
        <p className="text-success fs-4">
          Person: <span className="text-danger fw-bolder"> {id}</span>
        </p>
        <img src={person.avatar} alt="" />
        <p className="fs-4 text-primary-emphasis">
          {person.first_name} {person.last_name}
        </p>
        <button className="btn btn-danger me-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="btn btn-success" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
