import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Can } from "../ABILITY/can";
import Logo from "../ASSETS/IMAGES/logo.jpg";
import UseApi from "../HOOKS/UseApi";

const Header = (props) => {
	const api = UseApi();

	const onClickLogOut = () => {
		api
			.get("auth/logout")
			.then((res) => {
				console.log("res", res);
			})
			.catch((err) => {
				console.log("err", err);
			})
			.finally(() => {
				localStorage.removeItem("token");
				window.location.href = "/";
				setTimeout(() => {
					window.location.reload();
				}, 71);
			});
	};

	return (
		<header className="p-4 text-white" style={{ backgroundColor: "#222831" }}>
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<Link
						to="/"
						className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4"
					>
						<div style={{ width: "60px", height: "60px" }}>
							<img
								src={Logo}
								style={{ width: "100%", height: "100%", borderRadius: "50%" }}
							/>
						</div>
						<div style={{ marginLeft: "20px" }}>
							<h2> FindService </h2>
						</div>
					</Link>
					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li>
							<Link to="/" className="nav-link px-2 text-secondary">
								Home
							</Link>
						</li>
						<li>
							<Link to="/services" className="nav-link px-2 text-white">
								Services
							</Link>
						</li>

						<li>
							<Link to="/aboutus" className="nav-link px-2 text-white">
								About Us
							</Link>
						</li>
						<li>
							<Link to="/blogs" className="nav-link px-2 text-white">
								Blogs
							</Link>
						</li>
					</ul>
					<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
						<input
							type="search"
							className="form-control form-control-dark"
							placeholder="Search..."
							aria-label="Search"
						/>
					</form>
					{/* Token: {props.AuthState.token} */}
					{props.AppDataState.appData ? (
						<div className="text-end">
							<button type="button" className="btn btn-login me-4 ms-2">
								{/* My Account */}
								<strong style={{ textDecoration: "none", color: "#000" }}>
									{" "}
									{props.AppDataState.appData.user.fullname}
								</strong>
							</button>

							<Can I="manage" a="all">
								<button className="btn btn-signup me-4">
									<a
										href="/admin/dashboard"
										style={{ textDecoration: "none", color: "black" }}
									>
										ADMIN
									</a>
								</button>
							</Can>

							<button
								type="button"
								className="btn btn-signup "
								onClick={onClickLogOut}
							>
								<strong style={{ textDecoration: "none", color: "black" }}>
									Log Out
								</strong>
							</button>
						</div>
					) : (
						<div className="text-end">
							<button type="button" className="btn btn-login me-4 ms-2">
								<Link
									className="btn-login-link"
									to={"/login"}
									style={{ textDecoration: "none", color: "#000" }}
								>
									Login
								</Link>
							</button>
							<button type="button" className="btn btn-signup ">
								<Link
									to={"/register"}
									style={{ textDecoration: "none", color: "black" }}
								>
									Sign-Up
								</Link>
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps)(Header);
