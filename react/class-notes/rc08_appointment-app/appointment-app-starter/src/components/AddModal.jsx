import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddModal({ show, handleClose, apps, setApps,drName }) {
    const [name , setName ] = useState("")
    const [date, setDate] = useState( new Date().toISOString().slice(0,10))
    const handleSubmit = (e)=> {
        e.preventDefault()
        setApps([...apps, {
            id:apps.length + 1,
            patient: name,
            day:date,
            consulted:false,
            doctor:drName,

        }])



        handleClose()
    }

    // console.log(name, date);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
              onChange={(e)=> setName(e.target.value)}
              value={name}
                type="text"
                placeholder="Enter your name"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
              onChange={(e)=>setDate(e.target.value)}
              value={date}
                type="date"
                autoFocus
              />
            </Form.Group>
            <div className="d-flex justify-content-center gap-3 mb-2">
          <Button type="submit" variant="success">
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </div>
          </Form>
        </Modal.Body>

        
      </Modal>
    </>
  );
}

export default AddModal;
