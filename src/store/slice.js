import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    saveUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUsers: (state, action) => {
      state.users = state.users.filter(
        (user) => user.cell !== action.payload.cell
      );
    },
    newDepartament: (state, action) => {
      const { index, newDepartament } = action.payload;
      state.users[index].departament = newDepartament;
    },
  },
});

export const departamentsSlice = createSlice({
  name: "departaments",
  initialState: {
    departaments: [
      "Africa (sales)",
      "America (organization)",
      "America (commercial)",
      "Asia (distribution)",
      "Asia (supervision)",
      "Europa (marketing)",
      "Europa (distribution)",
      "Oceania (distribution)"
    ],
  },
});

export const { saveUser } = usersSlice.actions;
export const { newDepartament } = usersSlice.actions;
export const { deleteUsers } = usersSlice.actions;
