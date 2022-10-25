import { createStore } from "redux";

export const SET_CATEGORIES = "SET_CATEGORIES";

const initialState = {
	categories: null,
	initialized: false,
};

const CategoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CATEGORIES":
			return {
				...state,
				categories: action.payload.categories,
				initialized: true,
			};

		default:
			return state;
	}
};

export default CategoriesReducer;
