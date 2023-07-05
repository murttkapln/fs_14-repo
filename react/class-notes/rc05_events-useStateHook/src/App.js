import Event from "./1-events/Event"
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./2-classComponent/Counter"
import UseStateCounter from "./3-useState/UseStateCounter"
import UseStateObject from "./3-useState/UseStateObject"

function App() {
  return (
    <div className="text-bg-light rounded-5 container text-center ">
      {/* <Event/>
      <Counter/>
      <UseStateCounter/> */}
      <UseStateObject/>
    </div>
  )
}
export default App
