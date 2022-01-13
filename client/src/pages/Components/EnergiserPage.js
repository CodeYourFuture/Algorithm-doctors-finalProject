import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./EnergiserPage.css";
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
			<header className="energiser-page-title">
				<h1>Algorithm Doctors' Energisers</h1>
			</header>
			<div className="energiser-page-container">
				<h2 className="energiser-page-name">{energiser.name}</h2>
				<p className="energiser-page-participants">
					Participants: {energiser.participants}{" "}
				</p>
				<p className="energiser-page-duration">{energiser.duration} Mins</p>
				<a
					className="energiser-page-url"
					href={energiser.url}
					target="_blank"
					rel="noreferrer"
				>
					Click For Energiser!
				</a>
			</div>
		</div>
	);
};

export default EnergisePage;
