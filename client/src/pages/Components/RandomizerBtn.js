import React from "react";
import "../styles/randomBtn.css";

const RandomizerBtn = ({ energisersData, setEnergisersData }) => {
	console.log(energisersData);
	const handleClick = (arr) => {
		let randomEnergisersArray = [];
		const randomEnergiser = arr[Math.floor(Math.random() * arr.length)];
		randomEnergisersArray.push(randomEnergiser);
		return setEnergisersData(randomEnergisersArray);
	};

	return (
		<div className="random__energizer">
			<h3 className="energizer_text">Please Select Your Energizers</h3>
			<div className="energizer_button">
				<button
					onClick={() => handleClick(energisersData)}
					className="new_energizer">
					Get An Energizer
				</button>
			</div>
		</div>
	);
};

export default RandomizerBtn;
