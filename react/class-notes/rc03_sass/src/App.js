import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import data from "./data"


//? SCSS ' import ettik
import "./scss/app.scss"


function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  )
}

export default App
