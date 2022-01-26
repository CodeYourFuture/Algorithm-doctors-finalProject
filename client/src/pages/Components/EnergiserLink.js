import React from "react";
import { Link } from "react-router-dom";

const EnergiseLink = ({ id }) => {
	return (
		<div>
			<Link to={`/energisers/${id}`}>More Info</Link>
		</div>
	);
};

export default EnergiseLink;
