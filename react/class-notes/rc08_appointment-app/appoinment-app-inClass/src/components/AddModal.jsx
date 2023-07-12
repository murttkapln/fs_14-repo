import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose,apps, setApps, drName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  // console.log(name, date);
  const handleSubmit = (e) => {
    e.preventDefault();
    setApps([...apps, {
        id:apps.length+1,
        patient:name,
        day:date,
        consulted: false,
        doctor:drName
    }])





    handleClose();
  };
  return (
    <>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appoinment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                autoFocus
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.date)}
                type="date"
                autoFocus
                value={date}
              />
            </Form.Group>
            <div className="d-flex justify-content-center gap-3 mb-2">
              <Button variant="danger" type="submit">
                Submit
              </Button>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
