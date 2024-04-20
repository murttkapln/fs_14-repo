import  Col  from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";



const AppointmentsList = ({apps,setApps}) => {
    console.log(apps);

    const handleDelete = (id)=> {
        setApps(apps.filter((item)=> item.id !== id))
    }
    const handleDoubleClick = (id)=> {
        setApps(apps.map((item)=> item.id === id ? {...item,consulted:!item.consulted} : item))
    }


    return (
        <Container className="p-2">
            <h3 className="display-6 mb-2 " style={{color: "rgb(166,18,189)"}}>Appointments List</h3>

            {apps.map(({id,patient, consulted, doctor, day})=>(

            <div onDoubleClick={()=>handleDoubleClick(id)} key={id} className={consulted ? "appointments consulted" : "appointments"}>
                <Row  className="justify-content-center align-items-center">
                    <Col xs={12} sm={12} md={6}>
                        <h4>{patient}</h4>
                        <h5>{doctor}</h5>
                    </Col>
                    <Col>
                    <h5>{day}</h5>
                    </Col>
                    <Col className="text-end">
                        <TiDelete className="text-danger fs-1" role="button" onClick={()=>handleDelete(id)} />
                    </Col>
                </Row>
            </div>

            ))}
        </Container>
    )
}

export default AppointmentsList