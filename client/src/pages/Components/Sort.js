import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 230,
		marginTop: "1rem",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function Sort({ originalData, setEnergisersData }) {
	const classes = useStyles();
	const [selected, setSelected] = useState("");
	const handleChange = (e) => {
		setSelected(e.target.value);
	};

	useEffect(() => {
		if (selected === "name") {
			handleSortByName();
		} else if (selected === "duration" || selected === "participants") {
			handleSortByDuraPart();
		}
	}, [selected]);

	const handleSortByName = () => {
		const sortData = [...originalData].sort((a, b) =>
			a[selected].localeCompare(b[selected])
		);
		setEnergisersData(sortData);
	};
	const handleSortByDuraPart = () => {
		const sortData = [...originalData].sort(
			(a, b) => a[selected] - b[selected]
		);
		setEnergisersData(sortData);
	};

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={selected}
						onChange={(e) => handleChange(e)}
						label="Sort By"
					>
						<MenuItem value="name">Alphabetical Order </MenuItem>

						<MenuItem value="duration">Duration: Low To High</MenuItem>
						<MenuItem value="participants">Participants: Low To High</MenuItem>
					</Select>
			</FormControl>
		</div>
	);
}
