import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import {TiDelete} from "react-icons/ti"

const AppointmentList = ({apps, setApps}) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.map(({id, patient, consulted, doctor, day})=>(
        <div key={id} className={consulted ? "appointments consulted": "appointmnets"}>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={12} md={6}>
            <h4>{patient}</h4>
            <h6>{doctor}</h6>
          </Col>
          <Col>{day.toISOString().slice(0,10)}</Col>
          <Col className="text-end">
            <TiDelete className="text-danger fs-1"/>
          </Col>
        </Row>
      </div>
      ))}
      
    </Container>
  )
}

export default AppointmentList
