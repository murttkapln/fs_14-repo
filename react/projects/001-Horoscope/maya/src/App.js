import Header from "./components/header/Header";
import Main from "./components/main/Main"
import Navbar from "./components/navbar/Navbar"
import {data} from "./helper/data"

import "./scss/app.scss"


function App() {
  // console.log(data);
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main data={data}/>

    </div>
  )
}

export default App
