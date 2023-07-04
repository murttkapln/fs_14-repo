


const Main = ({id,title, date, desc, img}) => {
  return (
    <div>
        <div key={id}>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{desc}</p>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Main