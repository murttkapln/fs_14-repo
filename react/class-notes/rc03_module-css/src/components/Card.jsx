import CardStyle from "./card/Card.module.css"
import Button from "./button/Button"

const Card = ({lang, btn, img}) => {
  return (
    <div>
      <h1 className={CardStyle["title"]}>LANGUAGES</h1>
      <h1>{lang}</h1>
      <img className={CardStyle["images"]} src={img} alt="image" />
      <Button btn={btn}/>
    </div>
  )
}

export default Card