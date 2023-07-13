import { useState } from "react"
import LifeCycleMethods from "./components/LifeCycleMethods"
import UseEffectHook from "./UseEffecatHook"

function App() {
  const [visible , setVisible ] = useState(false)
  return (
    <div className="container text-center mt-4">
      <button onClick={()=> {setVisible(!visible)}} className="btn btn-danger">Show/Hide</button>
      {visible && <LifeCycleMethods /> }
      <UseEffectHook/>
      
    </div>
  )
}

export default App
