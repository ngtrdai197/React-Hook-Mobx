import { action } from "mobx";

export const storeActions = ({ state, initialData }) => {
  const addTask = action((task) => {
    state.tasks.push(task);
  });

  return {
    state,
    addTask,
  };
};
