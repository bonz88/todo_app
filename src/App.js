import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection("todos")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const handleChange = (event) => {
    const newInput = event.target.value;
    setInput(newInput);
  };

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setTodos([...todos, input]); //will stop refresh when using <form>
    setInput(""); //clear up the input after cliking add todo button
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={handleChange} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add ToDo
        </Button>
        {/* <button type="submit" onClick={addTodo}>
          Add Todo
        </button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
