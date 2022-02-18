import { combineReducers } from "redux";
import { counterReducer } from "./atmReducer";
export const RootReducer = combineReducers({
  counterReducer,
});

export type AppState = ReturnType<typeof RootReducer>;
