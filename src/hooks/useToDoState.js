import useLocalStorageState from "./useLocalStorageState";

import uuidv4 from "uuid/v4";

export default initialToDos => {
  const [toDos, setToDos] = useLocalStorageState("toDos", initialToDos);
  return {
    toDos,
    addToDo: newToDoText => {
      setToDos([
        ...toDos,
        { id: uuidv4(), task: newToDoText, completed: false }
      ]);
    },
    deleteToDo: toDoId => {
      const updatedToDos = toDos.filter(toDo => toDo.id !== toDoId);
      setToDos(updatedToDos);
    },
    toggleToDo: toDoId => {
      const updatedToDos = toDos.map(toDo =>
        toDoId === toDo.id ? { ...toDo, completed: !toDo.completed } : toDo
      );
      setToDos(updatedToDos);
    },
    editToDo: (toDoId, newTask) => {
      const updatedToDos = toDos.map(toDo =>
        toDoId === toDo.id ? { ...toDo, task: newTask } : toDo
      );
      setToDos(updatedToDos);
    }
  };
};
