import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import uuidv4 from "uuid/v4";

import ToDoList from "../components/to-do-list";
import ToDoForm from "../components/to-do-form";

const ToDoAppScreen = () => {
  const initialToDos = [
    { id: 1, task: "Clean Fish Tank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false }
  ];

  const [toDos, setToDos] = useState(initialToDos);

  const addToDo = newToDoText => {
    setToDos([...toDos, { id: uuidv4(), task: newToDoText, completed: false }]);
  };

  const deleteToDo = toDoId => {
    const updatedToDos = toDos.filter(toDo => toDo.id !== toDoId);
    setToDos(updatedToDos);
  };

  const toggleToDo = toDoId => {
    const updatedToDos = toDos.map(toDo =>
      toDoId === toDo.id ? { ...toDo, completed: !toDo.completed } : toDo
    );
    setToDos(updatedToDos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TO DO</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <ToDoForm addToDo={addToDo} />
          <ToDoList
            toDos={toDos}
            deleteToDo={deleteToDo}
            toggleToDo={toggleToDo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoAppScreen;
