import { IconButton, ListItem, ListItemText } from "@mui/material";
import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItem {
  todo: TodoType;
  deleteTodo: DeleteFn;
  toggleTodo: ToggleFn;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }>
      <ListItemText primary={todo.todo} onClick={() => toggleTodo(todo)} />
    </ListItem>
  );
};

export default TodoListItem;
