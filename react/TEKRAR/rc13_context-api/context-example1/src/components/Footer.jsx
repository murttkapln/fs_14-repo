import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Container className="text-center" style={{ marginTop: "10rem" }}>
      <Navbar fixed="bottom" className="justify-content-center bg-dark p-4">
        <P>Copyright {new Date().getFullYear()}</P>
      </Navbar>
    </Container>
  );
};

export default Footer;
