import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

// export const {  } = todoSlice.actions;
export default todoSlice.reducer;
