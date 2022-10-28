import React from "react";
import { Link } from "react-router-dom";
import Logo from "../ASSETS/IMAGES/logo.jpg";

const Header = (props) => {
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

					<div className="text-end">
						<button type="button" className="btn btn-login me-4 ms-2">
							<Link
								className="btn-login-link"
								to={"/login"}
								style={{ textDecoration: "none", color: "#000" }}
							>
								{" "}
								Login{" "}
							</Link>
						</button>
						<button type="button" className="btn btn-signup ">
							<Link
								to={"/register"}
								style={{ textDecoration: "none", color: "black" }}
							>
								{" "}
								Sign-Up{" "}
							</Link>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
