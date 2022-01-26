import React from "react";
import { useNavigate } from "react-router-dom";
import LikeBtn from "./LikeBtn";

const EnergiserCards = ({ energisersData, page, rowsPerPage }) => {
	const navigate = useNavigate();
	const handleNavigate = (id) => {
		console.log(id);
		navigate(`/energisers/${id}`);
	};
	return energisersData
		.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
		.map((energiserCard) => {
			const { id, name, description, participants, duration } = energiserCard;
			return (
				<li className="card-container" key={id}>
					<div className="card text-center">
						<div className="card-body" onClick={() => handleNavigate(id)}>
							<h2 className="card-title">{name}</h2>
							<p className="card-text">{description}</p>
							<p className="card-text">{duration} Mins</p>
							<p className="card-text">Participants: {participants}</p>
						</div>
						<LikeBtn
							existingLikeCount={5}
							onLike={() => console.log("like was clicked")}
							existingDislikeCount={1}
							onDislike={() => console.log("dislike was clicked")}
						/>
					</div>
				</li>
			);
		});
};

export default EnergiserCards;
