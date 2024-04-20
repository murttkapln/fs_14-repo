import axios from "axios"
import { useState } from "react"


const AddTutorial = ({getTutorials}) => {
const [title,setTitle] = useState("")
const [description, setDescription] = useState("")

const handleSubmit = (e)=> {
  e.preventDefault()
  const newTutor = {title:title, description:description}
  console.log(newTutor);
  postTutorial(newTutor)
  setTitle("")
  setDescription("")
}

const postTutorial = async(newTutor)=> {
  const BASE_URL = "http://tutorial-api.fullstack.clarusway.com/tutorials/"
  try {
    await axios.post(BASE_URL,newTutor)
  } catch (err) {
    console.log(err);
  }
//* Tüm tutorials'lari iste ve state'i guncelle.
  getTutorials()
}

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
          type="text" 
          id="title" 
          placeholder="Enter your title"
          required 
          className="form-control"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label 
          htmlFor="desc" className="form-label">Description</label>
          <input 
          type="text"
          id="desc"
          placeholder="Enter your Description"
          required
          className="form-control"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  )
}

export default AddTutorial