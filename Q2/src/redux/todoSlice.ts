import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: true,
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {},
});

// export const {  } = todoSlice.actions;
export default todoSlice.reducer;
