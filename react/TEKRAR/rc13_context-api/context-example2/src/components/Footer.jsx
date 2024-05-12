import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Container className="text-center" style={{ marginTop: "10rem" }}>
      <Navbar
        fixed="bottom"
        className="justify-content-center bg-secondary p-2 text-light d-block"
      >
        <p>Copyright {new Date().getFullYear()}</p> {"🐱‍👤🐱‍👤🐱‍👤"}
        <p className="fs-4 text-warning">Murat KAPLAN</p>
      </Navbar>
    </Container>
  );
};

export default Footer;
