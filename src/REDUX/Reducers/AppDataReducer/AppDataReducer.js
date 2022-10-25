import { createStore } from "redux";

const SET_APP_DATA = "SET_APP_DATA";
const REMOVE_APP_DATA = "REMOVE_APP_DATA";

const initialState = {
	appData: null,
};

const AppDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_APP_DATA":
			return {
				...state,
				appData: action.payload.appData,
			};

		case "REMOVE_APP_DATA":
			return {
				...state,
				appData: null,
			};

		default:
			return state;
	}
};

export default AppDataReducer;
