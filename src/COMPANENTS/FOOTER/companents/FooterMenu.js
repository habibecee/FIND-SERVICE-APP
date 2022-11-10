import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../LOADING/Loading";

const FooterMenu = (props) => {
	const uniqueId =
		"footerMenu_" + btoa(Math.random().toString()).substring(10, 15);
	if (props.loading === true) {
		return (
			<div className="accordion me-1" id="accordionFlushExample">
				<div className="accordion-item bg-dark">
					<h2 className="accordion-header" id="flush-headingOne">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={"#" + uniqueId}
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							{props.title}
						</button>
					</h2>
					<div
						id={uniqueId}
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingOne"
						data-bs-parent="#accordionFlushExample"
					>
						<div
							className="accordion-body"
							style={{
								width: "100px",
								height: "100px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Loading />
						</div>
					</div>
				</div>
			</div>
		);
	}

	const footerMenu = props.menu.map((item, index, arr) => {
		return (
			<li className="mb-1" key={index}>
				<Link className="link-secondary text-decoration-none" to={item.link}>
					{item.title}
				</Link>
			</li>
		);
	});

	return (
		<div className="accordion me-1 w-25" id="accordionFlushExample">
			<div className="accordion-item bg-dark">
				<h2 className="accordion-header" id="flush-headingOne">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseOne"
						aria-expanded="false"
						aria-controls="flush-collapseOne"
					>
						{props.title}
					</button>
				</h2>
				<div
					id="flush-collapseOne"
					className="accordion-collapse collapse"
					aria-labelledby="flush-headingOne"
					data-bs-parent="#accordionFlushExample"
				>
					<div className="accordion-body">
						<ul className="list-unstyled text-small">{footerMenu}</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterMenu;
