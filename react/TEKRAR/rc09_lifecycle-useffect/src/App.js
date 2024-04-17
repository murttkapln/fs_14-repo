import Container from "react-bootstrap/Container";
import LifeCycleMethods from "./components/LifeCycleMethods"
import UseEffectHook from "./components/UseEffectHook"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
function App() {

  const [visible, setVisible] = useState(true)
  return (
    <Container className="text-center mt-3">
      {/* {visible && <LifeCycleMethods />} */}
      {visible && <UseEffectHook />}
      <button className="btn btn-danger m-3" onClick={() => setVisible(!visible)}>Show/Hide</button>
    </Container>
  );
}

export default App;
