import React from "react";

const Login = (props) => {
	return (
		<div className="container px-4 py-5 pagesMain">
			<div className="pagesText">
				<h1 className="pagesH1"> LOGIN PAGE </h1>
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
							/>
						</div>
					</div>
				</div>
				<div style={{ marginLeft: "64%", marginTop: "30px" }} className="">
					<button type="button" className="loginBtn btn btn-success login-btn">
						LOG IN
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
