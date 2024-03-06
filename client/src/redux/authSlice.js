import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/auth/current/user');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.loading = false;
      state.user = null;
    },
    signOutUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // When the fetchUserData thunk is pending
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // When the fetchUserData thunk is fulfilled
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      // When the fetchUserData thunk is rejected
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { signOutUserStart, signOutUserFailure, signOutUserSuccess } =
  authSlice.actions;

export default authSlice.reducer;
