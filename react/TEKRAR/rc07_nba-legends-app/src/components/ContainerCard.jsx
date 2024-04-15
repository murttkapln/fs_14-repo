import { useState } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { data } from "../helpers/data"





const ContainerCard = () => {

    const [search, setSearch] = useState("")


    const handleChange = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value) //! setter metodları asenkron olarak çalışır.
        // console.log(search);

        console.log(data);

        const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()))

        console.log(filteredData);
    }

    return (
        <>
            <Form.Control type="search" placeholder="Search Player..."
                onChange={handleChange} />
            <Container className="p-3 rounded-4 card-container my-3">
                <Row className="justify-content-center g-3 " xs={2} md={4} lg={6}>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                </Row>
            </Container>
        </>
    )
}

export default ContainerCard