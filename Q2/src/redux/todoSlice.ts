import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { todoType } from "../type";

export const getData = createAsyncThunk("todo/getData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleTask: (state, action) => {
      const todo: todoType[] = state.todo.map((task: todoType) => {
        if (task.id === action.payload) task.completed = !task.completed;

        return task;
      });
      localStorage.setItem("todo", JSON.stringify(todo));

      state.todo = todo;
    },
    getDataFromLocal: (state) => {
      const data = localStorage.getItem("todo");
      if (data) {
        state.todo = JSON.parse(data);
      }
    },
    addTask: (state, action) => {
      const task: todoType = {
        title: action.payload,
        userId: 0,
        id: 0,
        completed: false,
      };

      state.todo.unshift(task);
      alert("Added Task");
      localStorage.setItem("todo", JSON.stringify(state.todo));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        // state.todo = action.payload;
        state.loading = false;
        localStorage.setItem("todo", JSON.stringify(action.payload));
      })
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { getDataFromLocal, addTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
