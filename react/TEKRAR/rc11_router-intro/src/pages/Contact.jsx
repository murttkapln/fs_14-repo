import { useNavigate } from "react-router-dom"


const Contact = () => {
  let navigate = useNavigate()
  return (
    <div className="p-3 text-center d-flex flex-column align-items-center justify-content-center gap-2 bg-dark text-warning">
      <h1>Contact</h1>
      <button className="btn btn-success w-25" onClick={()=>navigate(-1)}>Go Back</button>
      <button className="btn btn-danger w-25 " onClick={()=>navigate("/")}>Go Home</button>
    </div>
  )
}

export default Contact