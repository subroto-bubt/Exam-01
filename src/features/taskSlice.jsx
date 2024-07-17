import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const saveTask = JSON.parse(localStorage.getItem("task"));
if (saveTask) {
  initialState.tasks = saveTask;
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const { id, name, protitle, prodes, createdAt } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        (task.name = name),
          (task.protitle = protitle),
          (task.prodes = prodes),
          (task.createdAt = createdAt);
        localStorage.setItem("task", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
