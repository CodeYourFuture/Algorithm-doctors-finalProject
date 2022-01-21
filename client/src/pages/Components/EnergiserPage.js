import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/EnergiserPage.css";
const EnergiserPage = () => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return energiser.map((item) => {
		const { id, name, description, participants, duration, instructions } = item;
		return (
			<div key={id}>
				<header className="energiser-page-title">
					<h1>Algorithm Doctors' Energisers</h1>
				</header>
				<div className="energiser-page-container">
					<h2 className="energiser-page-name">{name}</h2>
					<p className="energiser-page-description">{description}</p>
					<div className="energiser-page-partduration">
						<p>Participants: {participants}</p>
						<p>{duration} Mins</p>
					</div>
					<p className="energiser-page-how">How To Run:</p>
					<p className="energiser-page-duration">{instructions}</p>
				</div>
			</div>
		);
	});
};

export default EnergiserPage;
