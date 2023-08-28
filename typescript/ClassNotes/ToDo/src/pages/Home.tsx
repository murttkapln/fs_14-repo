import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import AddTodoComp from "../components/AddTodoComp";
interface TodoType {
  todo: string;
  isDone: boolean;
  id: string | number; // id bilgisi string yada number olabilir. İki veri tipinide kabul edecek.
}

const Home = () => {
  // const [todos, setTodos] = useState([] as TodoType[]);
  // const [todos, setTodos] = useState<Array<TodoType>>([]);
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

  // const addTodo = async (text:string) => {
  //   try {

  //   } catch (error) {}
  // };
  type AddFn = (text: string) => Promise<void>;

  const addTodo: AddFn = async text => {
    try {
      await axios.post(url, { todo: text, isDone: false });
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography
        color="error"
        align="center"
        variant="h2"
        component={"h1"}
        mt={3}>
        Todo App with Typescript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
    </Container>
  );
};

export default Home;
