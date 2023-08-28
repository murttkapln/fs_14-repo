import { useEffect, useState } from "react";
import axios from "axios"

interface TodoType {
  todo: String;
  isDone: Boolean;
  id: String | Number;
}
const Home = () => {
  // const [todos, setTodos] = useState<Array<TodoType[]>>([])
  // const [todos, setTodos] = useState([] as TodoType[])
  const [todos, setTodos] = useState<TodoType[]>([]);
  const url = import.meta.env.VITE_BASE_URL
  const getTodos = async ()=> {
    try {
      // const {data} = await axios(url)
      const {data} = await axios<TodoType[]>(url)
      console.log(data);
      setTodos(data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getTodos()
  })

  return <div onClick={()=> setTodos([{id:5, todo:"eren", isDone:true}])}>Home</div>;
};

export default Home;
