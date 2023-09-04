import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"

const TodoListItem = () => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteIcon />
        </IconButton>
      }>
      <ListItemText primary={`Line item`}/>
    </ListItem>
  );
};

export default TodoListItem;
