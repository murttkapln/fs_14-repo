import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ apps, setApps }) => {
  const handleDelete = (id) => {
    setApps(apps.filter((item) => item.id !== id));
  };
  const handleDoubleClick = (id) => {
    setApps(
      apps.map((item) =>
        item.id == id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.length < 1 && <img src="./img/appointment.jpg" width="70%" />}
      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div
          onDoubleClick={() => handleDoubleClick(id)}
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h6>{doctor}</h6>
            </Col>
            <Col>{day}</Col>
            <Col className="text-end">
              <TiDelete
                type="button"
                onClick={() => handleDelete(id)}
                className="text-danger fs-1"
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
