import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { doctoData, doctorData } from "../helper/data";
import { useState } from "react";
import AddModal from "./AddModal";

const Doctors = () => {
  // console.log(doctorData);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(!show);
  };
  const handleImgClick = () => {
    setShow(!show)
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctorData.map(({ id, img, dep, name }) => (
          <Col key={id} xs={6} sm={4} md={3}>
            <img
              onClick={handleImgClick}
              src={img}
              alt={name}
              className="img-thumbnail doctor-img"
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      {show && <AddModal show={show} handleClose={handleClose} />}
    </Container>
  );
};

export default Doctors;
