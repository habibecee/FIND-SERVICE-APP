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
import Blogs from "./PAGES/Blogs";
import Categories from "./PAGES/CATEGORIES/Categories";
import UseApi from "./HOOKS/UseApi";
import { SET_CATEGORIES } from "../src/REDUX/Reducers/CategoriesReducer/CategoriesReducer";
import { SET_APP_DATA } from "./REDUX/Reducers/AppDataReducer/AppDataReducer";
import { REMOVE_APP_DATA } from "./REDUX/Reducers/AppDataReducer/AppDataReducer";
import { REMOVE_TOKEN } from "./REDUX/Reducers/AuthReducer/AuthReducer";

const App = (props) => {
	const Api = UseApi();

	if (props.AuthState.token && !props.AppDataState.appData) {
		Api.get("user/appData")
			.then((response) => {
				console.log(">> App Data Resp", response);

				const action = {
					type: SET_APP_DATA,
					payload: {
						appData: response.data.data,
					},
				};
				props.dispatch(action);
			})
			.catch((err) => {
				console.error(">> APP API ERROR", err);

				if (err.response.data.status === "error") {
					if (err.response.data.exceptionType === "UserNotLoggedInException") {
						// bu hatayı aldığımıza göre bizdeki token bilgisi artık invalid

						// Local storage'dan token bilgisini sil
						localStorage.removeItem("token");

						const action = {
							type: REMOVE_TOKEN,
						};
						props.dispatch(action);

						const actionAppData = {
							type: REMOVE_APP_DATA,
						};
						props.dispatch(actionAppData);

						window.location.href = "/#";
					}
				} else {
					// Genel hata mesajı ver
					alert("Genel hata oluştu, lütfen daha sonra tekrar deneyin.");
				}
			});
	}

	if (props.CategoriesState.initialized === false) {
		Api.get(
			"https://api.adoptez1artisan.com/public/categories/listMainCategories"
		)
			.then((res) => {
				// console.log("res categories", res);
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
				<Route path={"/blogs"} element={<Blogs />} />
				<Route path={"/categories"} element={<Categories />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

const mapPropsToState = (state) => {
	return {
		...state,
	};
};

export default connect(mapPropsToState)(App);
