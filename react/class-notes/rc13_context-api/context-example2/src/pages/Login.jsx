import { useContext } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {  useLoginContext } from "../context/LoginContext.jsx"
import { useNavigate } from "react-router-dom"

const Login = () => {
  // //! Local State
  // const [user, setUser] = useState({ email: "", password: "" })

  //? Consuming of login context
  const { user, setUser } = useLoginContext()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(-1)
    // setUser({ email: "", password: "" })
  }

  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email}
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password}
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default Login
