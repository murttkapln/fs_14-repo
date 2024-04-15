
import Container from "react-bootstrap/esm/Container";
import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";
import PlayerCard from "./components/PlayerCard";

function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <ContainerCard />
      <PlayerCard />
    </Container>
  );
}

export default App;
