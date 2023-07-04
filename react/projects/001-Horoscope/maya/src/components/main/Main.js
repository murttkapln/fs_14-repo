import Header from "../header/Header"
import Card from "./Card"
import MainStyle from "./Main.module.scss"



const Main = ({data}) => {
    // console.log(data);
  return (
    <div className={MainStyle["card-container"]}>
        <Header/>
        <Card data={data}/>
    </div>
  )
}

export default Main