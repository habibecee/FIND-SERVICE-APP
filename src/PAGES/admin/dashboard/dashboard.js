import React from "react";
import { connect } from "react-redux";
import { Can } from "../../../ABILITY/can";
import Logo from "../../../ASSETS/IMAGES/logo.jpg";

const Dashboard = (props) => {
	return (
		<div className="container px-4 py-5 pagesMain" id="custom-cards">
			<div className="pagesText">
				<h1 className="pagesH1"> ADMIN DASHBOARD PAGE </h1>
			</div>

			<Can I="read" a="user_management">
				<br />
				<strong className="pagesH1"> YES, YOU CAN READ USERS. </strong>
			</Can>
			<Can I="update" a="user_management">
				<br />
				<strong className="pagesH1"> YES, YOU CAN UPDATE USERS. </strong>
			</Can>

			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
				<div className="col ">
					<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg homeCard1 ">
						<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
								Short title, long jacket
							</h2>
							<ul className="d-flex list-unstyled mt-auto">
								<li className="me-auto">
									<img
										src={Logo}
										alt=""
										width="42"
										height="42"
										className="rounded-circle border border-white"
									/>
								</li>
								<li className="d-flex align-items-center me-3">
									<img alt="" />
									<small>Earth</small>
								</li>
								<li className="d-flex align-items-center">
									<img alt="" />
									<small>3d</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	//console.log(">>> dashboard MAP STATE", state);

	return {
		...state,
	};
};

export default connect(mapStateToProps)(Dashboard);
