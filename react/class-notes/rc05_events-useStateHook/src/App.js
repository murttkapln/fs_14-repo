import Event from "./1-events/Event"
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./2-classComponent/Counter"

function App() {
  return (
    <div className="text-bg-light rounded-5 container ">
      <Event/>
      <Counter/>
    </div>
  )
}
export default App
