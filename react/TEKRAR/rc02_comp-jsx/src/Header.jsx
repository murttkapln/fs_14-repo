import "../node_modules/bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <div>
        <ul className=" d-flex justify-content-evenly bg-dark text-light rounded-pill p-2 ">
            <li className="btn btn-light bg-danger">Home</li>
            <li className="btn btn-light bg-success">About</li>
            <li className="btn btn-light bg-warning">Contact</li>
            <li className="btn btn-light bg-info">Services</li>
        </ul>
    </div>
  )
}

export default Header