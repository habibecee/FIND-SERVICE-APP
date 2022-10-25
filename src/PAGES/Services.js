import React from "react";
import Photo1 from "../../src/ASSETS/service-slider/sld1.jpg";
import Photo2 from "../../src/ASSETS/service-slider/sld2.jpg";
import Photo3 from "../../src/ASSETS/service-slider/sld3.jpg";
import Photo4 from "../../src/ASSETS/service-slider/sld4.jpg";
import Photo5 from "../../src/ASSETS/service-slider/sld5.jpg";

const Services = (props) => {
	return (
		<div className="container px-4 py-5 pagesMain">
			<div className="pagesText">
				<h1 className="pagesH1"> SERVICES PAGE </h1>
			</div>

			{/* //SLIDER START // */}
			<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="0"
						className="active"
						aria-label="Slide 1"
						aria-current="true"
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="1"
						aria-label="Slide 2"
						className=""
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="2"
						aria-label="Slide 3"
						className=""
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="3"
						aria-label="Slide 4"
						className=""
					></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="4"
						aria-label="Slide 5"
						className=""
					></button>
				</div>
				<div className="carousel-inner">
					<div
						className="carousel-item active"
						style={{ width: "100%", height: "500px" }}
					>
						<img
							className="bd-placeholder-img"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
							style={{ width: "100%", height: "100%" }}
							src={Photo1}
						/>

						<div className="container">
							<div className="carousel-caption text-start">
								<h1>Example headline.</h1>
								<p>
									Some representative placeholder content for the first slide of
									the carousel.
								</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Sign up today
									</a>
								</p>
							</div>
						</div>
					</div>
					<div
						className="carousel-item"
						style={{ width: "100%", height: "500px" }}
					>
						<img
							className="bd-placeholder-img"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
							style={{ width: "100%", height: "100%" }}
							src={Photo2}
						/>

						<div className="container">
							<div className="carousel-caption">
								<h1>Another example headline.</h1>
								<p>
									Some representative placeholder content for the second slide
									of the carousel.
								</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Learn more
									</a>
								</p>
							</div>
						</div>
					</div>
					<div
						className="carousel-item"
						style={{ width: "100%", height: "500px" }}
					>
						<img
							className="bd-placeholder-img"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
							style={{ width: "100%", height: "100%" }}
							src={Photo3}
						/>

						<div className="container">
							<div className="carousel-caption text-end">
								<h1>One more for good measure.</h1>
								<p>
									Some representative placeholder content for the third slide of
									this carousel.
								</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Browse gallery
									</a>
								</p>
							</div>
						</div>
					</div>
					<div
						className="carousel-item"
						style={{ width: "100%", height: "500px" }}
					>
						<img
							className="bd-placeholder-img"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
							style={{ width: "100%", height: "100%" }}
							src={Photo4}
						/>

						<div className="container">
							<div className="carousel-caption">
								<h1>Another example headline.</h1>
								<p>
									Some representative placeholder content for the second slide
									of the carousel.
								</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Learn more
									</a>
								</p>
							</div>
						</div>
					</div>
					<div
						className="carousel-item"
						style={{ width: "100%", height: "500px" }}
					>
						<img
							className="bd-placeholder-img"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
							style={{ width: "100%", height: "100%" }}
							src={Photo5}
						/>

						<div className="container">
							<div className="carousel-caption text-end">
								<h1>One more for good measure.</h1>
								<p>
									Some representative placeholder content for the third slide of
									this carousel.
								</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Browse gallery
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* //SLIDER FINISH // */}
		</div>
	);
};

export default Services;
