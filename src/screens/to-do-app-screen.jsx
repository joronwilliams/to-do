import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

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
    setToDos([...toDos, { id: 4, task: newToDoText, completed: false }]);
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
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} />
    </Paper>
  );
};

export default ToDoAppScreen;
