import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/authService";
import { getAccessToken, setAccessToken, removeAccessToken, getUser, setUser, removeUser } from "../../utils/storage";

interface AuthState {
//   user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
//   user: getUser(),
  token: getAccessToken(),
  loading: false,
  error: null,
  isAuthenticated: !!getAccessToken(),
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await login(username, password);
      setAccessToken(response.token);
    //   setUser(response.user);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
    //   state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      removeAccessToken();
      removeUser();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
