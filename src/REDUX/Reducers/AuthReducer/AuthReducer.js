import { createStore } from "redux";

const SET_TOKEN = "SET_TOKEN";
const REMOVE_TOKEN = "REMOVE_TOKEN";

const initialState = {
	token: null,
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_TOKEN":
			return {
				...state,
				token: action.payload.token,
			};

		case "REMOVE_TOKEN":
			return {
				...state,
				token: null,
			};

		default:
			return state;
	}
};

export default AuthReducer;