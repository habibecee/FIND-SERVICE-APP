import React from "react";

const Register = (props) => {
	return (
		<div className="container px-4 py-5 pagesMain">
			<div className="pagesText">
				<h1 className="pagesH1"> REGISTER PAGE </h1>
			</div>
			<form className="registerForm row needs-validation" novalidate>
				<div className="col-md-6">
					<label for="validationCustom01" className="form-label">
						Full Name
					</label>
					<input type="text" className="form-control" />
					<div className="valid-feedback">Looks good!</div>
				</div>

				<div className="col-md-6">
					<label for="validationCustomUsername" className="form-label">
						Email Adress
					</label>
					<div className="input-group has-validation">
						<input type="text" className="form-control" />
						<div className="invalid-feedback">
							Please write an avaliable email adress.
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<label for="validationCustom01" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" />
					<div className="valid-feedback">Looks good!</div>
				</div>
				<div className="col-md-6">
					<label for="validationCustom03" className="form-label">
						Country
					</label>
					<input type="text" className="form-control" />
					<div className="invalid-feedback">Please provide a valid city.</div>
				</div>

				<div className="col-md-6">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" />
						<label className="form-check-label" for="invalidCheck">
							Agree to terms and conditions
						</label>
						<div className="invalid-feedback">
							You must agree before submitting.
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<button
						className="submitBtn btn btn-success"
						type="submit"
						style={{ marginLeft: "78%", width: "130px" }}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
