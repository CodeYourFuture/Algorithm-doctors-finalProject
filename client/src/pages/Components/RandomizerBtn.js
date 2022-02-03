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
			<Button
					style={{
						borderRadius: 5,
						color: "white",
						backgroundColor: "#d12f2f",
						padding: "10px 20px",
						marginLeft: "30px",
						fontSize: "0.9rem",
						fontWeight: "bold",
						outline: "none",
					}}
					variant="contained"
					onClick={() => handleClick(originalData)}
					className="new_energizer"
				>
					Energise Me!!!
				</Button>
		</div>
	);
};

export default RandomizerBtn;
