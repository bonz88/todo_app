import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";

const Todo = (props) => {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
      </ListItem>
      <Button
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        Delete me
      </Button>
    </List>
  );
};

export default Todo;
