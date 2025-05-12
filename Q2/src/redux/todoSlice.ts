import { createSlice } from "@reduxjs/toolkit";

// interface todoType {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean,
// }

const todoSlice = createSlice({
  name: "counter",
  initialState: {
    todo: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
    ],
  },
  reducers: {},
});

// export const {  } = todoSlice.actions;
export default todoSlice.reducer;
