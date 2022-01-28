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
	setEnergisersData,
}) {
    const [durationFilter, setDurationFilter] = React.useState([]);
	const [personName, setPersonName] = React.useState([]);
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	const handleFilterDurationOneToFive = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 1 && energiser.duration <= 5
		);
		setEnergisersData(filterData);
	};
	const handleFilterParticipants1To5 = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.participants >= 1 && energiser.participants <= 5
		);
		setEnergisersData(filterData);
	};
	const handleFilterDurationSixToTen = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 6 && energiser.duration <= 10
		);
		setEnergisersData(filterData);
	};
	const handleFilterParticipants6To10 = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.participants >= 6 && energiser.participants <= 10
		);
		setEnergisersData(filterData);
	};
	const handleFilterDurationElevenToFifteen = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 11 && energiser.duration <= 15
		);
		setEnergisersData(filterData);
	};
	const handleFilterParticipants11To15 = () => {
		const filterData = originalData.filter(
			(energiser) =>
				energiser.participants >= 11 && energiser.participants <= 15
		);
		setEnergisersData(filterData);
	};
	const handleFilterDurationSixteenToTwenty = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 16 && energiser.duration <= 20
		);
		setEnergisersData(filterData);
	};
	const handleFilterParticipants16To20 = () => {
		const filterData = originalData.filter(
			(energiser) =>
				energiser.participants >= 16 && energiser.participants <= 20
		);
		setEnergisersData(filterData);
	};

	const filterOptions = [
		{
			op: "Duration: 1-5 Mins",
			func: handleFilterDurationOneToFive,
		},
		{
			op: "Duration: 6-10 Mins",
			func: handleFilterDurationSixToTen,
		},
		{
			op: "Duration: 11-15 Mins",
			func: handleFilterDurationElevenToFifteen,
		},
		{
			op: "Duration: 16-20 Mins",
			func: handleFilterDurationSixteenToTwenty,
		},
		{
			op: "Participants: 1-5",
			func: handleFilterParticipants1To5,
		},
		{
			op: "Participants: 6-10",
			func: handleFilterParticipants6To10,
		},
		{
			op: "Participants: 11-15",
			func: handleFilterParticipants11To15,
		},
		{
			op: "Participants: 16-20",
			func: handleFilterParticipants16To20,
		},
	];

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
					<div style={{ display: "flex", flexDirection: "column" }}>
						{filterOptions.map((name) => (
							<MenuItem key={name.op} value={name.op} onClick={name.func}>
								<Checkbox />
								<ListItemText primary={name.op} />
							</MenuItem>
						))}
					</div>
				</Select>
			</FormControl>
		</div>
	);
}
