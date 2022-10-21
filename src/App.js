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

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/login"} element={<Login />} />
				<Route path={"/register"} element={<Register />} />
				<Route path={"/services"} element={<Services />} />
				<Route path={"/aboutus"} element={<AboutUs />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
