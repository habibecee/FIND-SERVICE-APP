import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer/AuthReducer";
import AppDataReducer from "./AppDataReducer/AppDataReducer";
import CategoriesReducer from "./CategoriesReducer/CategoriesReducer";

const ReducersContainer = {
	AuthState: AuthReducer,
	AppDataState: AppDataReducer,
	CategoriesState: CategoriesReducer,
};

const CombineReducer = combineReducers(ReducersContainer);

export default CombineReducer;
