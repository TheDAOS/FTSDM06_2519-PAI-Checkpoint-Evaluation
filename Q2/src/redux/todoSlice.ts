import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    getDataFromLocal: (state) => {
      const data = localStorage.getItem("todo");
      if (data) {
        state.todo = JSON.parse(data);
      }
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

export const { getDataFromLocal } = todoSlice.actions;
export default todoSlice.reducer;
