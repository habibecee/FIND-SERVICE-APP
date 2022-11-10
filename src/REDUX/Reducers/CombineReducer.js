import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer/AuthReducer";
import AppDataReducer from "./AppDataReducer/AppDataReducer";
import CategoriesReducer from "./CategoriesReducer/CategoriesReducer";

const CombineReducer = combineReducers({
	AuthState: AuthReducer,
	AppDataState: AppDataReducer,
	CategoriesState: CategoriesReducer,
});

export default CombineReducer;
