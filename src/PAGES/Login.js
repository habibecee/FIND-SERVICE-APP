import React, { useState } from "react";
import UseApi from "../HOOKS/UseApi";
import { connect } from "react-redux";
import { SET_TOKEN } from "../../src/REDUX/Reducers/AuthReducer/AuthReducer";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
	const navigate = useNavigate();
	const api = UseApi();
	console.log(">>> LOGIN PAGE PROPS", props);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLoginClick = () => {
		const postData = {
			email,
			password,
		};
		console.log(">> POST DATA", postData);

		api
			.post("auth/login", postData)
			.then((response) => {
				console.log(">> RES", response);
				console.log(">> TOKEN", response.data.data.token);

				if (response.data.status === "success") {
					localStorage.setItem("token", response.data.data.token);

					const action = {
						type: SET_TOKEN,
						payload: { token: response.data.data.token },
					};
					props.dispatch(action);

					navigate("/");

					setTimeout(() => {
						window.location.reload();
					}, 71);
				} else {
					alert("Hatalı eposta veya şifre girildi.");
				}
			})
			.catch((err) => {
				console.log(">> ERR", err);
				alert(err.response.data.errorMessage);
			});
	};

	return (
		<div className="container px-4 py-5 pagesMain">
			<div className="pagesText">
				<h1 className="pagesH1"> LOGIN PAGE </h1>
			</div>
			<div className="d-flex align-items-center justify-content-center mt-5 text-center">
				<p
					className=""
					style={{
						textShadow: "3px -3px 10px #000, -3px 3px 10px #000",
						color: "#00f2ff",
					}}
				>
					HI! WELCOME TO API TUTORIAL LOG IN PAGE. <br /> PLEASE ENTER YOUR
					ACCOUNT'S INFORMATION.
				</p>
			</div>
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						marginLeft: "30%",
						marginTop: "50px",
					}}
					className=""
				>
					<div className="mb-4 row d-flex flex-column align-items-start  ">
						<div className="">
							<label className="col-sm-2 col-form-label login-text">
								Email
							</label>
						</div>
						<div className="col-sm-7 mt-3">
							<input
								type="text"
								className="form-control login-input"
								placeholder="you@example.com"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-4 row d-flex flex-column align-items-start">
						<div>
							<label className="col-sm-2 col-form-label login-text">
								Password
							</label>
						</div>
						<div className="col-sm-7 mt-3">
							<input
								type="password"
								className="form-control login-input"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div style={{ marginLeft: "64%", marginTop: "30px" }} className="">
					<button
						type="button"
						className="loginBtn btn btn-success login-btn"
						onClick={onLoginClick}
					>
						LOG IN
					</button>
				</div>
			</div>
			<div className="d-flex align-items-center justify-content-center mt-5 text-center">
				<p>
					IF YOU DON'T HAVE AN ACCOUNT, <br />
					<a href="/register"> CLICK HERE TO SIGN UP </a>
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(">>> LOGIN MAP STATE", state);

	return {
		...state,
	};
};

export default connect(mapStateToProps)(Login);
