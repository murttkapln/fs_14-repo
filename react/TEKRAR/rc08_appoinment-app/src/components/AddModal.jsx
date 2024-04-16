
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddModal({ show, handleClose }) {

    const [name, setName] = useState("")
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))

    console.log(name, date);


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apoinment for ...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} value={name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Day&Time</Form.Label>
                            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-center align-items-center gap-3' >
                    <Button variant="primary" onClick={handleClose} role='submit'>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddModal;