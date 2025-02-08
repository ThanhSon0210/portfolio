import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth/auth.service"; 
import { projectApi } from "../services/project/project.service"; 

const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware, authApi.middleware),
});

export default store;
