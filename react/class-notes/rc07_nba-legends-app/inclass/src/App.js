import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container className="text-center mt-5">
      <Header/>
      <CardContainer/>
    </Container>
  );
}

export default App;
