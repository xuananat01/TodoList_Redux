import {createSlice} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // action add and push array
    addTask: (state, action) => {
      const newTask = {
        id: action.payload.task,
        name: action.payload.task,
      };
      state.push(newTask);
    },
    // action delete
    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;
