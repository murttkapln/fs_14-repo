import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")


  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({email,password})
    console.log(email,password);
    sessionStorage.setItem("user", JSON.stringify({email,password}))
    navigate("/people")
  }

  let navigate = useNavigate()


  return (
    <div className="container p-5 mt-4  text-secondary fs-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
