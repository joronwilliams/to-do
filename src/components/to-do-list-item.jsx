import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import useToggleState from "../hooks/useToggleState";

import EditToDoForm from "./edit-to-do-form";

const ToDoListItem = ({
  task,
  completed,
  deleteToDo,
  id,
  toggleToDo,
  editToDo
}) => {
  const [editState, setEditState] = useToggleState();
  return (
    <ListItem style={{ height: "64px" }}>
      {editState ? (
        <EditToDoForm
          editToDo={editToDo}
          id={id}
          task={task}
          setEditState={setEditState}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleToDo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={() => setEditState()}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => deleteToDo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default ToDoListItem;
