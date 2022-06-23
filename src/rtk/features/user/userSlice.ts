import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IReduxUser } from "../../../lib/types/index";
import UserService from "../../../api/services/user.service";

export interface UserState {
  users: IReduxUser[];
  user: IReduxUser | undefined;
  error: any;
  loading: any;
}

export const getAllUsersAsyncThunk = createAsyncThunk(
  "user/getAllUsers",
  async (_, {}) => {
    return UserService.getAllUsers();
  },
);

const initialState: UserState = {
  users: [],
  user: undefined,
  loading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IReduxUser>) => {
      state.users = [action.payload, ...state.users];
    },
    setUserById: (state, action: PayloadAction<number>) => {
      state.user = state.users.find((x) => x.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAsyncThunk.fulfilled, (state, _action) => {
      state.loading = false;
      state.users = _action.payload.users;
    });
    builder.addCase(getAllUsersAsyncThunk.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(getAllUsersAsyncThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { addUser, setUserById } = userSlice.actions;

export default userSlice.reducer;
