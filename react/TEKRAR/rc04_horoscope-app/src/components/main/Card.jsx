const Card = ({ title, date, image, desc }) => {
    // console.log(props);
    // const { title, date, image, desc } = props
    return (
        <div className="cards" >
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="date">{date}</div>
            <img src={image} alt="img" />
            <div className="card-over">
                <p>{desc}</p>
            </div>
        </div >
    )
}


export default Card