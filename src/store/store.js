import { configureStore } from "@reduxjs/toolkit"
import { departamentsSlice, usersSlice } from "./slice"

export default configureStore({
    reducer: {
        users: usersSlice.reducer,
        departaments: departamentsSlice.reducer
    }
})