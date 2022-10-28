import React, { useEffect, useState } from "react";
import Loading from "../../COMPANENTS/LOADING/Loading";
import UseApi from "../../HOOKS/UseApi";
import CategoryBox from "./companents/CategoryBox";

const Categories = (props) => {
	const Api = UseApi();
	const [pageLength, setPageLength] = useState(6);
	const [pageStart, setPageStart] = useState(0);
	const [totalPageCount, setTotalPageCount] = useState(0);
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		getPages(pageLength, pageStart);
	}, []);

	useEffect(() => {
		getPages(pageLength, pageStart);
	}, [pageLength, pageStart]);

	let categoryList = [];

	if (categories) {
		categories.map((item, index) => {
			categoryList.push(
				<CategoryBox
					key={item.id}
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
				<Loading key="0" />
			</div>
		);
	}

	const getPages = (length, start) => {
		Api.get("/public/categories/listMainCategories", {
			params: { length, start },
		})
			.then((res) => {
				console.log("res", res);
				setCategories(res.data.data);
				setTotalPageCount(
					Math.ceil(parseInt(res.data.recordsTotal) / pageLength)
				);
			})
			.catch((err) => console.log("err", err));
	};

	const pageCompanent = [];

	for (let i = 0; i < totalPageCount; i++) {
		pageCompanent.push(
			<button
				key={i}
				onClick={() => setPageStart(i * pageLength)}
				className="btn btn-lg me-5 btnPageNo"
			>
				{i + 1}
			</button>
		);
	}

	const lengthSelectCompanent = [];
	for (let i = 0; i < 3; i++) {
		lengthSelectCompanent.push(
			<button
				key={i}
				onClick={() => setPageLength((i + 1) * 3)}
				className="btn btn-lg me-5 btnPageNo"
			>
				{(i + 1) * 3}
			</button>
		);
	}

	return (
		<div className="container px-4 py-5 pagesMain">
			<div className="pagesText">
				<h1 className="pagesH1">CATEGORIES LIST</h1>
			</div>
			<div className="row mb-2 d-flex align-items-center justify-content-center ">
				<div className="d-flex flex-column align-items-center justify-content-center">
					<div className="d-flex align-items-center justify-content-center me-5">
						Page Counts: {totalPageCount}
					</div>
					&nbsp;
					<div className="d-flex flex-column align-items-center justify-content-center my-3">
						<div className="d-flex align-items-center justify-content-center me-5 mb-2">
							Row:
						</div>
						<div className="d-flex align-items-center justify-content-center">
							{lengthSelectCompanent}
						</div>
					</div>
					&nbsp;
					<div className="d-block flex-column align-items-center justify-content-center my-3">
						<div className="d-flex align-items-center justify-content-center me-5">
							Pages:
						</div>
						<div className="d-flex align-items-center justify-content-center">
							{pageCompanent}
						</div>
					</div>
				</div>
			</div>
			<div className="row mb-2">{categoryList}</div>
		</div>
	);
};

export default Categories;
