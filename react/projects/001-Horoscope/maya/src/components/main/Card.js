import CardStyle from "./Card.module.scss";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map(({ id, title, date, desc, image }) => (
        <div className={CardStyle["card-container"]} key={id}>
          <div className={CardStyle["cards"]}>
            <div className={CardStyle["title"]}>
              <h1>{title}</h1>
            </div>
            <div className={CardStyle["date"]}>
              <h1>{date}</h1>
            </div>
            <img src={image} alt="image" />
            <div className={CardStyle["desc"]}>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
