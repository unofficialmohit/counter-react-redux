import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { isLoggedIn } from "./isLoggedInReducer";
export const combinedReducer=combineReducers(
{
    counter:counterReducer,
    login:isLoggedIn
}
)