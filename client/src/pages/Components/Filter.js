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
	
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);

	};


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
