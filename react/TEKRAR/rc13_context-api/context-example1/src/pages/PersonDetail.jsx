import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https:/reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (error) {
    return <h1>Page Nt Found</h1>;
  } else if (!person) {
    return (
      <div className="text-center">
        <h2>Data is Fetching</h2>
      </div>
    );
  } else {
    return (
      <Container className="text-center d-flex flex-column align-items-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <Image className="w-50 rounded shadow-lg" src={person?.avatar} />
        <button className=" rounded-4 text-dark mt-3 fs-6">
          {person.email}
        </button>
      </Container>
    );
  }
};

export default PersonDetail;
