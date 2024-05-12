import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";

const People = () => {
  let navigate = useNavigate();
  const [people, setPeople] = useState([]);

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  //   console.log(people);
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Container className="text-center mt-4">
      <h1>PEOPLE LISTS</h1>
      <Row className="justify-content-center g-3">
        {people?.map((person, index) => {
          const { avatar, first_name, id, last_name } = person;

          return (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              type="button"
              onClick={() => navigate(`${id}`)}
            >
              <Image className="rounded" src={avatar} alt="img" />
              <h6 className="fs-4 text-dark">
                {first_name} {last_name}
              </h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default People;
