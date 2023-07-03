import CardStye from "../scss/card.module.scss"


const Card = ({data}) => {
  console.log(data);
  return (
    <div className={CardStye.container}>
      {data.map((item)=> {
        const { id, name, job, comment, img} = item
        return (
          <div key={id} className={CardStye.card}> 
              <h1>{name}</h1>
              <h3>{job}</h3>
              <p>{comment}</p>
              <img src={img} alt="" />
              <div className={CardStye.buttons}>
                <button className={CardStye.small}>Small</button>
                <button className={CardStye.large}>Large</button>
              </div>
          </div>

          

      )
      
      
      
      
      })}
    </div>
  )
}

export default Card
