import Header from "./components/header/Header";
import Main from "./components/main/Main"
import Navbar from "./components/navbar/Navbar"
import {data} from "./helper/data"

import "./scss/app.scss"


function App() {
  console.log(data);
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {data.map((item)=> {
        const {id, title, date, desc, image} = item
        return (
          <div>
            <Main key={id} title={title} date={date} desc={desc} img ={image}/>
          </div>

         

        )
      })}

    </div>
  )
}

export default App
