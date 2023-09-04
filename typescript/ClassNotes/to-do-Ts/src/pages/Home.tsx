import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import AddTodoComp from "../components/AddTodoComp";
import TodoLists from "../components/TodoLists";

interface TodoType {
  todo: string;
  isDone: boolean;
  id: string | number; // id=> string veya number olabilir
}
const Home = () => {
  // const [todos , setTodos ] = useState([] as TodoType[])
  // const [todos , setTodos ] = useState<Array<TodoType>>([])
  const [todos, setTodos] = useState<TodoType[]>([]);
  const url: string = import.meta.env.VITE_BASE_URL;

  const getTodos = async () => {
    try {
      // const {data} = await axios(url)
      const { data } = await axios<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
//   const addTodo = async (text:string)=> {
//     try {
        
//     } catch (error) {
//         console.log(error);
        
//     }
//   }
type AddFn = (text:string) => Promise<void>;
  const addTodo:AddFn = async (text:string)=> {
    try {
        await axios.post(url, {todo:text, isDone:false})
        
    } catch (error) {
        console.log(error);
        
    }finally{
        getTodos()
    }
  }

  useEffect(() => {
    getTodos();
  });

  return (
    <Container>
      <Typography
        color="error"
        align="center"
        variant="h2"
        component="h1"
        mt={3}
      >
        Todo App with TypeScript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoLists/>
    </Container>
  );
};

export default Home;
