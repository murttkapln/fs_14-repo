import Header from "./Header"
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"
import Footer from "./Footer"
import Content from "./Content"
import "./App.css"

function App() {
  return (
    <div className="App container text-center">
      <pre id="heading" className="display-4 text-danger fw-bolder">Hello React</pre>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
