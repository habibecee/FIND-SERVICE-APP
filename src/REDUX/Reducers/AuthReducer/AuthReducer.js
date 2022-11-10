const localStorageToken = localStorage.getItem("token");

const initialState = {
	token: localStorageToken,
};

export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (dispatch, value) => {
	dispatch({
		type: "set_token",
		payload: {
			token: value,
		},
	});
};

export const setUsername = (dispatch, username) => {
	dispatch({
		type: "set_token",
		payload: {
			username: username,
		},
	});
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
