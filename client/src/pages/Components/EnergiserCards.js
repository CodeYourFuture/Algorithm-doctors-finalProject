import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import StarRating from "./Rating";

const EnergiserCards = ({
	energisersData,
	page,
	rowsPerPage,
	isLoggedIn,
	user,
}) => {
	const navigate = useNavigate();
	const handleNavigate = (id) => {
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
							{/* <StarRating id={id} /> */}
							<p className="card-text">{description}</p>
							<p className="card-text">{duration} Mins</p>
							<p className="card-text">Participants: {participants}</p>
						</div>
						{isLoggedIn ? <LikeBtn id={id} user={user} /> : null}
					</div>
				</li>
			);
		});
};

export default EnergiserCards;
