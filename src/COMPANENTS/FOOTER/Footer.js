import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../ASSETS/IMAGES/logo.jpg";
import FooterMenu from "./companents/FooterMenu";
import { connect } from "react-redux";

const Footer = (props) => {
	console.log("PROPSSS", props);
	const AboutUs_Menu = [
		{
			title: "Our Team",
			link: "/aboutus/#our-team",
		},
		{
			title: "Vision",
			link: "/aboutus/#vision",
		},
		{
			title: "Mission",
			link: "/aboutus/#mission",
		},
		{
			title: "Contact Us",
			link: "/aboutus/#contact-us",
		},
		{
			title: "Privacy",
			link: "/aboutus/#privacy",
		},
		{
			title: "Terms and Conditions",
			link: "/aboutus/#terms-and-conditions",
		},
		{
			title: "Support",
			link: "/aboutus/#support",
		},
	];
	const Blogs_Menu = [
		{
			title: "Electric-Electronic",
			link: "/blogs/#electric-elektronic",
		},
		{
			title: "Renovation",
			link: "/blogs/#renovation",
		},
		{
			title: "Whitewash",
			link: "/blogs/#whitewash",
		},
	];

	let Categories_Menu = [];

	if (props.categoriesState?.initialized === true) {
		Categories_Menu = props.categoriesState.categories.map((item, index) => {
			if (index > 4) {
				return;
			}

			const MenuItem = {
				title: item.name,
				link: "/category/" + item.slug,
			};

			return MenuItem;
		});
	}

	Categories_Menu = Categories_Menu.slice(0, 5);
	console.log("CATEGORY MENU ", Categories_Menu);

	return (
		<footer
			className="pt-3 pb-3 text-muted text-left text-small d-flex align-items-start justify-content-start"
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
						alt=""
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

			<FooterMenu title="ABOUT US" menu={AboutUs_Menu} />
			<FooterMenu
				title="CATEGORIES"
				menu={Categories_Menu}
				loading={!props.categoriesState.initialized}
			/>
			<FooterMenu title="BLOGS" menu={Blogs_Menu} />
		</footer>
	);
};

const mapStateToProps = (state) => {
	console.log("FOOTER MENU PROPS", state);
	return {
		categoriesState: state.CategoriesState,
	};
};

export default connect(mapStateToProps)(Footer);
