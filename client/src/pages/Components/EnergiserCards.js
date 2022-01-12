/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";

const EnergiserCards = ({ energisersData }) => {
	return energisersData.map((energiserCard) => {
		const {
			id, name, url, participants, duration,
		} = energiserCard;
		return (
			<li className="card-container" key={id}>
				<div className="card text-center">
					<div className="card-body">
						<h2 className="card-title">{name}</h2>
						<LikeBtn
							existingLikeCount={5}
							onLike={() => console.log("like was clicked")}
							existingDislikeCount={1}
							onDislike={() => console.log("like was clicked")}
						/>
						<p className="card-text">{duration} Mins</p>
						<p className="card-text">Participants: {participants}</p>
						<Link to={`/energisers/${id}`}>More Info</Link>
					</div>
				</div>
			</li>
		);
	});
};

export default EnergiserCards;
