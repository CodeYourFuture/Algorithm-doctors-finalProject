import React from "react";
import { Link } from "react-router-dom";

const EnergiseLink = ({ id }) => {
	return (
		<div>
			<Link to={`/energiserPage/${id}`}>View More</Link>
		</div>
	);
};

export default EnergiseLink;
