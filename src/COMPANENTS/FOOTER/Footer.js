import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../ASSETS/IMAGES/logo.jpg";
import FooterMenu from "./companents/FooterMenu";

const Footer = (props) => {
	return (
		<footer
			className="pt-4 pb-4 text-muted text-center text-small d-flex align-items-start justify-content-start"
			style={{ backgroundColor: "#222831" }}
		>
			<div
				style={{
					width: "40px",
					height: "40px",
					marginBottom: "20px",
				}}
			>
				<Link to={"/"}>
					<img
						src={Logo}
						style={{ width: "100%", height: "100%", borderRadius: "50%" }}
					/>
				</Link>
			</div>

			<div
				style={{
					marginBottom: "20px",
					marginLeft: "20px",
					marginRight: "50px",
				}}
			>
				<p className="mb-1">© 2022 REACT PROJECT</p>
			</div>

			<FooterMenu
				title="ABOUT US"
				menu={["Our Team", "Vision", "Mision", "Team Feature"]}
			/>
			<FooterMenu
				title="GENERAL"
				menu={[
					"Privacy",
					"Terms and Conditions",
					"Support",
					"Stuff For Developers",
				]}
			/>
			<FooterMenu
				title="SERVICES"
				menu={["Electric/Electronic", "Repairs", "Renovations"]}
			/>
		</footer>
	);
};

export default Footer;
