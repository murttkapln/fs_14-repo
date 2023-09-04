import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";

const TodoLists = () => {
  return (
    <Grid
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography
          sx={{ color: "green" }}
          color="secondary"
          align="center"
          variant="h4"
        >
          InProgress Todos
        </Typography>
        <TodoListItem />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography sx={{ color: "green" }} align="center" variant="h4">
          Completed Todos
        </Typography>
        <TodoListItem />
      </Grid>
    </Grid>
  );
};

export default TodoLists;
