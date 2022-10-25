import React, { useEffect } from "react";
import Logo from "../ASSETS/IMAGES/logo.jpg";

const Home = (props) => {
	return (
		<div className="container px-4 py-5 pagesMain" id="custom-cards">
			<div className="pagesText">
				<h1 className="pagesH1"> HOME PAGE </h1>
			</div>

			<div>
				<button className="btn btn-md btn-warning">
					{" "}
					<a href="/categories">CATEGORIES LIST</a>{" "}
				</button>
			</div>

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

				<div className="col ">
					<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg homeCard2">
						<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
								Much longer title that wraps to multiple lines
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
									<small>Sweden</small>
								</li>
								<li className="d-flex align-items-center">
									<img alt="" />
									<small>4d</small>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="col ">
					<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg homeCard3">
						<div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
							<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
								Another longer title belongs here
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
									<small>California</small>
								</li>
								<li className="d-flex align-items-center">
									<img alt="" />
									<small>5d</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
