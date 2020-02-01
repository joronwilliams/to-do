import React from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ToDoListItem from "./to-do-list-item";

const ToDoList = ({ toDos, deleteToDo, toggleToDo }) => {
  return (
    <Paper>
      <List>
        {toDos.map(toDo => (
          <>
            <ToDoListItem
              task={toDo.task}
              key={toDo.id}
              id={toDo.id}
              completed={toDo.completed}
              deleteToDo={deleteToDo}
              toggleToDo={toggleToDo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default ToDoList;
