import { connect } from "react-redux";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./COMPANENTS/Header";
import Home from "./PAGES/Home";
import Footer from "./COMPANENTS/FOOTER/Footer";
import Login from "./PAGES/Login";
import Services from "./PAGES/Services";
import Register from "./PAGES/Register";
import AboutUs from "./PAGES/AboutUs";
import Categories from "./PAGES/CATEGORIES/Categories";
import UseApi from "./HOOKS/UseApi";
import { SET_CATEGORIES } from "../src/REDUX/Reducers/CategoriesReducer/CategoriesReducer";

const App = (props) => {
	const Api = UseApi();

	if (props.CategoriesState.initialized === false) {
		Api.get(
			"https://api.adoptez1artisan.com/public/categories/listMainCategories"
		)
			.then((res) => {
				console.log("res categories", res);
				props.dispatch({
					type: SET_CATEGORIES,
					payload: {
						categories: res.data.data,
					},
				});
			})
			.catch((err) => console.log("categories err", err));
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/login"} element={<Login />} />
				<Route path={"/register"} element={<Register />} />
				<Route path={"/services"} element={<Services />} />
				<Route path={"/aboutus"} element={<AboutUs />} />
				<Route path={"/categories"} element={<Categories />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

const mapPropsToState = (state) => {
	console.log("APP STATE PROPS", state);
	return {
		...state,
	};
};

export default connect(mapPropsToState)(App);
