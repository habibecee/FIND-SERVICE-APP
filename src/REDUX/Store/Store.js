import { createStore } from "redux";
import CombineReducer from "../Reducers/CombineReducer";

const store = createStore(CombineReducer);

export default store;
