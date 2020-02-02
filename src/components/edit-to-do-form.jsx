import React from "react";

import TextField from "@material-ui/core/TextField";

import useInputState from "../hooks/useInputState";

const EditToDoForm = ({ editToDo, id, task, setEditState }) => {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editToDo(id, value);
        setEditState();
        reset();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        autoFocus
        fullWidth
        margin="normal"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default EditToDoForm;
