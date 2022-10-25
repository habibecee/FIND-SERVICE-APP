import React from "react";
import Photo1 from "../../src/ASSETS/aboutus-photo/1.jpg";
import Photo2 from "../../src/ASSETS/aboutus-photo/2.jpg";
import Photo3 from "../../src/ASSETS/aboutus-photo/3.jpg";

const AboutUs = (props) => {
	return (
		<div className="container px-4 py-5 pagesMain">
			<div className="pagesText">
				<h1 className="pagesH1"> ABOUT US </h1>
			</div>
			<div className="container marketing">
				<hr className="featurette-divider" />

				<div
					className="row featurette"
					id="our-team"
					style={{ padding: "2% 0" }}
				>
					<div className="col-md-7" style={{ padding: "2% 2%" }}>
						<h2 className="featurette-heading">
							First featurette heading. <br />
							<span className="text-muted">It’ll blow your mind.</span>
						</h2>
						<p className="lead">
							Some great placeholder content for the first featurette here.
							Imagine some exciting prose here.
						</p>
					</div>
					<div className="col-md-5" style={{ width: "450px", height: "450px" }}>
						<img
							className="p-2"
							style={{ width: "99%", height: "99%" }}
							src={Photo1}
							alt="500x500"
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette" id="vision" style={{ padding: "2% 0" }}>
					<div className="col-md-7 order-md-2" style={{ padding: "2% 2%" }}>
						<h2 className="featurette-heading">
							Oh yeah, it’s that good. <br />
							<span className="text-muted">See for yourself.</span>
						</h2>
						<p className="lead">
							Another featurette? Of course. More placeholder content here to
							give you an idea of how this layout would work with some actual
							real-world content in place.
						</p>
					</div>
					<div
						className="col-md-5 order-md-1"
						style={{ width: "450px", height: "450px" }}
					>
						<img
							className=""
							style={{ width: "99%", height: "99%", padding: "2%" }}
							src={Photo2}
							alt="500x500"
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div
					className="row featurette"
					id="mission"
					style={{ padding: "2% 0" }}
				>
					<div className="col-md-7" style={{ padding: "2% 2%" }}>
						<h2 className="featurette-heading">
							And lastly, this one. <br />
							<span className="text-muted">Checkmate.</span>
						</h2>
						<p className="lead">
							And yes, this is the last block of representative placeholder
							content. Again, not really intended to be actually read, simply
							here to give you a better view of what this would look like with
							some actual content. Your content.
						</p>
					</div>
					<div className="col-md-5" style={{ width: "450px", height: "450px" }}>
						<img
							className=""
							style={{ width: "99%", height: "99%", padding: "2%" }}
							src={Photo3}
							alt="500x500"
						/>
					</div>
				</div>
				<hr className="featurette-divider" />

				<div
					className="row featurette"
					id="contact-us"
					style={{ padding: "2% 0" }}
				>
					<div className="col-md-7 order-md-2" style={{ padding: "2% 2%" }}>
						<h2 className="featurette-heading">
							Oh yeah, it’s that good. <br />
							<span className="text-muted">See for yourself.</span>
						</h2>
						<p className="lead">
							Another featurette? Of course. More placeholder content here to
							give you an idea of how this layout would work with some actual
							real-world content in place.
						</p>
					</div>
					<div
						className="col-md-5 order-md-1"
						style={{ width: "450px", height: "450px" }}
					>
						<img
							className=""
							style={{ width: "99%", height: "99%", padding: "2%" }}
							src={Photo1}
							alt="500x500"
						/>
					</div>
				</div>
				<hr className="featurette-divider" />
			</div>
		</div>
	);
};

export default AboutUs;
