import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EnergisePage = () => {
	const { id } = useParams();
	const [energiser, setEnergiser] = useState([]);

	useEffect(() => {
		fetch(`/api/energisers/${id}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				setEnergiser(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);
	return (
		<div>
			<p>
				energiser {energiser.id} with param id: {id}
			</p>
			<a href={energiser.url} target="_blank" rel="noreferrer">
				{energiser.name}
			</a>
		</div>
	);
};

export default EnergisePage;
