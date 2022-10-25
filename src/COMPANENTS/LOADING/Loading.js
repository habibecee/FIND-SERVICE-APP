import React from "react";
import LoadingGif from "../LOADING/Loading.gif";

const Loading = (props) => {
	return (
		<div>
			<img
				alt=""
				src={LoadingGif}
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			/>
		</div>
	);
};

export default Loading;
