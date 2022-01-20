import React from "react";
import "../styles/randomBtn.css";
import { Button } from "@mui/material";
const RandomizerBtn = ({ setEnergisersData , originalData }) => {
	const handleClick = (arr) => {
		let randomEnergisersArray = [];
		const randomEnergiser = arr[Math.floor(Math.random() * arr.length)];
		randomEnergisersArray.push(randomEnergiser);
		return setEnergisersData(randomEnergisersArray);
	};

	return (
		<div className="random__energizer">
			<div className="energizer_button">
			<Button
					style={{
						borderRadius: 5,
						color: "white",
						backgroundColor: "#dc514a",
						padding: "18px 36px",
						marginLeft: "30px",
						fontSize: "0.9rem;",
						fontWeight: "bold",
						outline: "none",
					}}
					variant="contained"
					onClick={() => handleClick(originalData)}
					className="new_energizer"
				>
					Click Here to Get a Random Energiser!!
				</Button>
			</div>
		</div>
	);
};

export default RandomizerBtn;
