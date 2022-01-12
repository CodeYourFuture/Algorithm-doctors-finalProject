import React from "react";
import { useParams } from "react-router-dom";
const EnergisePage = ({ data }) => {
	const { id } = useParams();
	return (
		<div>
			{data
				.filter((elem) => elem.id == id)
				.map((energiser, index) => (
					<div key={index}>
						<p>
							energiser {energiser.id} with param id: {id}
						</p>
						<a href={energiser.url} target="_blank" rel="noreferrer">
							{energiser.url}
						</a>
					</div>
				))}
		</div>
	);
};

export default EnergisePage;
