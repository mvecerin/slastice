import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import recipeReducer from "../features/recipe/recipeSlice";
import userReducer from "../features/user/userSlice";

const combinedReducer = combineReducers({
  recipe: recipeReducer,
  user: userReducer,
});

// Reset store after sign out
const rootReducer = (state: any, action: any) => {
  if (action.type === "user/signOut") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
