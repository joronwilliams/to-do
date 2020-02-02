import React from "react";

import useToDoState from "../hooks/useToDoState";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import ToDoList from "../components/to-do-list";
import ToDoForm from "../components/to-do-form";

const ToDoAppScreen = () => {
  const initialToDos = [{ id: 1, task: "Wash Car", completed: false }];
  const { toDos, addToDo, deleteToDo, toggleToDo, editToDo } = useToDoState(
    initialToDos
  );

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
            editToDo={editToDo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoAppScreen;
