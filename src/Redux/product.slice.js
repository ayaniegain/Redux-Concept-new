import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    isLoading: false,
    isError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false; // Reset isError on pending
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;

        // console.log(action.payload);
        // state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export default productSlice.reducer;
