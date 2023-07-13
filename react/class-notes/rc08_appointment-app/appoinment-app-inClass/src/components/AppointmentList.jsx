import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appoinments, setAppointments }) => {
  // console.log(appoinments);
  const handleDelete = (id)=>{
    setAppointments(appoinments.filter((item)=>item.id !== id))

  }
  const handleDoubleClick = (id)=>{
    setAppointments(appoinments.map((item)=>item.id ===id ? {...item, consulted:!item.consulted}: item))
  }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {appoinments.lenght < 1 && <img src="./img/appointment.jpg" style={{width:"70%"}}/>}
      {appoinments.map(({ id, patient, consulted, doctor, day }) => (
        <div
        onDoubleClick={()=> handleDoubleClick(id)}
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={6} md={6}>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>{day.toISOString().slice(0, 10)}</h5>
            </Col>
            <Col className="text-end">
              <TiDelete onClick={()=> handleDelete(id)} role="button" className="text-danger fs-1" />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
