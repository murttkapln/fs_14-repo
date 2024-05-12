import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useLoginContext } from "../context/LoginProvider";

function Navs() {
  //! Consuming Login Context
  const { user, setUser } = useLoginContext();
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://lwfiles.mycourse.app/636eabce30e6cb1684161cd5-public/559d03be1989d6f67801fe9dcd352193.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {user?.email && user?.password ? (
              <Link
                className="nav-link"
                to="/login"
                onClick={() => setUser({ email: "", password: "" })}
              >
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
