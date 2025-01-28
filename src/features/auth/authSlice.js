import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user")) || null;
const token = localStorage.getItem("token") || "";

const initialState = {
    user: user,
    token: token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      },
  },
extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected,(state,action)=>{
        state.isError = true
        state.message = action.payload
      })
      .addCase(validar.fulfilled,(state,action)=>{
        state.esCorrecto = action.payload
      })
  },
})

export const register = createAsyncThunk('auth/register',async(user)=>{
    try {
        return await authService.register(user);
      } catch (error) {
        console.error(error);
      }
    }
  )

  export const login = createAsyncThunk("auth/login", async (user) => {
    try {
      return await authService.login(user);
    } catch (error) {
      console.error(error);
    }
  });

  export const validar = createAsyncThunk("auth/validar", async (dni) => {
    try {
      return await authService.validar(dni);
    } catch (error) {
      console.error(error);
    }
  });

export default authSlice.reducer;