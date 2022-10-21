import React from "react";

const FooterMenu = (props) => {
	const footerMenu = props.menu.map((item, index) => {
		return (
			<li className="mb-1" key={index}>
				<a className="link-secondary text-decoration-none" href="#">
					{item}
				</a>
			</li>
		);
	});

	return (
		<div className="col-6 col-md">
			<h5>{props.title}</h5>
			<ul className="list-unstyled text-small">{footerMenu}</ul>
		</div>
	);
};

export default FooterMenu;
