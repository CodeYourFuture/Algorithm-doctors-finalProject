import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ originalData, setEnergisersData }) {
	const handleSortByAlphabets = () => {
		const sortData = originalData.sort((a, b) => a.name.localeCompare(b.name));
		setEnergisersData(sortData);
	};
	const handleSortByDurationLH = () => {
		const sortData = originalData.sort((a, b) =>  a.duration - b.duration);
		setEnergisersData(sortData);
	};
	const handleSortByParticipantsLH = () => {
		const sortData = originalData.sort(
			(a, b) => a.participants - b.participants
		);
		setEnergisersData(sortData);
	};
	return (
		<Box sx={{ m: 2, width: 230 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Sort"
				>
                    <div style={{ display: "flex", flexDirection: "column" }}>
					<MenuItem onClick={handleSortByAlphabets} >Alphabetical Order</MenuItem>
					<MenuItem onClick={handleSortByDurationLH}>Duration: Low To High</MenuItem>
					<MenuItem onClick={handleSortByParticipantsLH}>Participants: Low To High</MenuItem>
                    </div>
				</Select>
			</FormControl>
		</Box>
	);
}