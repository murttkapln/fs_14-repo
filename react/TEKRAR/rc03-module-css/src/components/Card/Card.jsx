import Button from "../button/Button"



const Card = ({ lang, img, btn }) => {
    return (
        <div>
            <h1>{lang}</h1>
            <img src={img} alt="image" />
            <h2>{btn}</h2>
            <Button btn={btn} />
        </div>
    )
}

export default Card