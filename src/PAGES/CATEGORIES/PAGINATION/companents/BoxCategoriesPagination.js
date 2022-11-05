import { useParams } from "react-router-dom";

const BoxCategoriesPagination = (props) => {
	console.log("BOX PROPS", props);
	const Params = useParams();
	return (
		<div className="col-md-6">
			<div
				className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative categoryBox"
				style={{ height: "300px" }}
			>
				<div className="col p-4 d-flex flex-column position-static">
					<strong className="d-inline-block mb-2 text-dark">
						{props.created_at}
					</strong>

					<div className="propTitle">
						<h3 className="mb-0 text-light categoryBoxName">{props.name}</h3>
					</div>

					<div className="mb-1 text-light propContent">
						<p className="card-text mb-auto">{props.description}</p>
					</div>

					<a
						href={props.href}
						className="stretched-link text-info text-decoration-none categoryBoxDetails "
					>
						See More Details
					</a>
				</div>
				<div className="col-auto d-none d-lg-block pt-5 pe-5">
					<img
						className="bd-placeholder-img"
						width="200"
						height="200"
						src={props.image}
						aria-label="Placeholder: Thumbnail"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					/>
				</div>
			</div>
		</div>
	);
};

export default BoxCategoriesPagination;
