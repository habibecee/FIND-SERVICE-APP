import React, { useEffect, useState } from "react";
import Pagination from "../COMPANENTS/PAGINATION/Pagination";

const Blogs = (props) => {
	return (
		<>
			<Pagination
				remoteUrl="/public/blogs/list"
				//-------      /public/blogs/list  -----    /public/categories/listMainCategories
				page="BLOGS"
			/>
		</>
	);
};

export default Blogs;
