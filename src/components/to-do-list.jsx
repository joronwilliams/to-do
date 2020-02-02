import React from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ToDoListItem from "./to-do-list-item";

const ToDoList = ({ toDos, deleteToDo, toggleToDo, editToDo }) => {
  if (toDos.length)
    return (
      <Paper>
        <List>
          {toDos.map((toDo, i) => (
            <>
              <ToDoListItem
                {...toDo}
                key={toDo.id}
                deleteToDo={deleteToDo}
                toggleToDo={toggleToDo}
                editToDo={editToDo}
              />
              {i < toDos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default ToDoList;
