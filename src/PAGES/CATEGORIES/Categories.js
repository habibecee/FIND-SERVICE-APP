import React, { useEffect, useState } from "react";
import Loading from "../../COMPANENTS/LOADING/Loading";
import UseApi from "../../HOOKS/UseApi";
import CategoryBox from "./companents/CategoryBox";

const Categories = (props) => {
	const Api = UseApi();
	const [categories, setCategories] = useState(null);
	const [pageLength, setPageLength] = useState(5);
	const [pageStart, setPageStart] = useState(0);

	useEffect(() => {
		Api.get("/public/categories/listMainCategories")
			.then((res) => {
				console.log("res", res);
				setCategories(res.data.data);
			})
			.catch((err) => console.log("err", err));
	}, []);

	let categoryList = [];

	if (categories) {
		categories.map((item, index) => {
			categoryList.push(
				<CategoryBox
					key={index}
					id={item.id}
					created_at={item.created_at}
					name={item.name}
					href={`/category'${item.slug}`}
					description={item.description}
					image={item.image}
				/>
			);
		});
	} else {
		categoryList.push(
			<div style={{ width: "30%", height: "30%", marginLeft: "35%" }}>
				<Loading />
			</div>
		);
	}

	return (
		<div className="container px-4 py-5 pagesMain">
			<div className="pagesText">
				<h1 className="pagesH1"> CATEGORIES LIST </h1>
			</div>
			<div className="row mb-2">{categoryList}</div>
		</div>
	);
};

export default Categories;
