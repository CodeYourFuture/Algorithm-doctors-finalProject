import { React } from "react";
import { useNavigate } from "react-router-dom";
import EnergiserCard from "./EnergiserCard";

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
			const { id } = energiserCard;
			return (
				<EnergiserCard
					energiserCard={energiserCard}
					handleNavigate={handleNavigate}
					isLoggedIn={isLoggedIn}
					key={id}
					user={user}
				/>
			);
		});
};

export default EnergiserCards;
