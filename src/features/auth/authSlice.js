import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user")) || null;
const token = localStorage.getItem("token") || "";

const initialState = {
  user: user,
  token: token,
  dniData: null, // Nueva propiedad para almacenar datos de DNI
};

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.error(error);
  }
});
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

export const getUserById = createAsyncThunk("users/getById", async (id) => {
  try {
    return await authService.getUserById(id);
  } catch (error) {
    console.error(error);
  }
});
export const getDniById = createAsyncThunk("dniVerificados/getById", async (id) => {
  try {
    return await authService.getDniById(id);
  } catch (error) {
    console.error(error);
  }
});

export const getAllUsers = createAsyncThunk(
  "users/getAll",
  async () => {
    try {
      return await authService.getAllUsers();
    } catch (error) {
      console.error(error);
    }
  }
);
export const getAllDnis = createAsyncThunk(
  "dniVerificados/getAll",
  async () => {
    try {
      return await authService.getAllDnis();
    } catch (error) {
      console.error(error);
    }
  }
);

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
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getDniById.fulfilled, (state, action) => {
        state.dniData = action.payload; // Guardar los datos del DNI
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.user = action.payload; // Guardar los datos del DNI
      }) 
      .addCase(getAllDnis.fulfilled, (state, action) => {
        state.dniData = action.payload; // Guardar los datos del DNI
      });     
  },
});

export default authSlice.reducer;
