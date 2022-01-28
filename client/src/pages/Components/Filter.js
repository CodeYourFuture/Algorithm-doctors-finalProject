import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

export default function Filter({
	originalData,
	energisersData,
	setEnergisersData,
}) {
	const [personName, setPersonName] = React.useState([]);
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		console.log(event.target.value);
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);

	};

	// const handleFilterDurationOneToFive = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) => energiser.duration >= 1 && energiser.duration <= 5
	// 	);
	// 	setEnergisersData(filterData);
	// };
	// const handleFilterParticipants1To5 = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) => energiser.participants >= 1 && energiser.participants <= 5
	// 	);
	// 	setEnergisersData(filterData);
	// };
	// const handleFilterDurationSixToTen = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) => energiser.duration >= 6 && energiser.duration <= 10
	// 	);
	// 	setEnergisersData(filterData);
	// };
	// const handleFilterParticipants6To10 = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) => energiser.participants >= 6 && energiser.participants <= 10
	// 	);
	// 	setEnergisersData(filterData);
	// };
	// const handleFilterDurationElevenToFifteen = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) => energiser.duration >= 11 && energiser.duration <= 15
	// 	);
	// 	setEnergisersData(filterData);
	// };
	// const handleFilterParticipants11To15 = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) =>
	// 			energiser.participants >= 11 && energiser.participants <= 15
	// 	);
	// 	setEnergisersData(filterData);
	// };
	// const handleFilterDurationSixteenToTwenty = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) => energiser.duration >= 16 && energiser.duration <= 20
	// 	);
	// 	setEnergisersData(filterData);
	// };
	// const handleFilterParticipants16To20 = () => {
	// 	const filterData = originalData.filter(
	// 		(energiser) =>
	// 			energiser.participants >= 16 && energiser.participants <= 20
	// 	);
	// 	setEnergisersData(filterData);
	// };

	const filterOptions = [ "1-5", "6-10", "11-15", "16-20"];

	return (
		<div>
			<FormControl sx={{ m: 1, width: 230 }}>
				<InputLabel id="demo-multiple-checkbox-label">Filter By</InputLabel>
				<Select
					labelId="demo-multiple-checkbox-label"
					id="demo-multiple-checkbox"
					multiple
					value={personName}
					onChange={handleChange}
					input={<OutlinedInput label="Tag" />}
					renderValue={(selected) => selected.join(", ")}
					MenuProps={MenuProps}
				>
					{/* <div style={{ display: "flex", flexDirection: "column" }}> */}
						{filterOptions.map((name) => (
							<MenuItem key={name} value={name} >
								<Checkbox checked={personName.indexOf(name) > -1} />
								<ListItemText primary={`Duration: ${name} mins`} />
							</MenuItem>
						))}
					{/* </div> */}
				</Select>
			</FormControl>
		</div>
	);
}
