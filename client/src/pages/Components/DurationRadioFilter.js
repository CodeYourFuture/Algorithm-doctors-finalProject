import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function DurationRadioButtons({
	originalData,
	setEnergisersData,
}) {
	const [value, setValue] = useState("none");
	const handleNone = () => {
		setEnergisersData(originalData);
	};
	const handleFilterDurationOneToFive = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 1 && energiser.duration <= 5
		);
		setEnergisersData(filterData);
	};

	const handleFilterDurationSixToTen = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 6 && energiser.duration <= 10
		);
		setEnergisersData(filterData);
	};

	const handleFilterDurationElevenToFifteen = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 11 && energiser.duration <= 15
		);
		setEnergisersData(filterData);
	};

	const handleFilterDurationSixteenToTwenty = () => {
		const filterData = originalData.filter(
			(energiser) => energiser.duration >= 16 && energiser.duration <= 20
		);
		setEnergisersData(filterData);
	};
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<FormControl>
				<FormLabel id="demo-radio-buttons-group-label">
					Filter By Duration
				</FormLabel>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					name="radio-buttons-group"
					value={value}
					onChange={handleChange}
				>
					<FormControlLabel
						value="none"
						control={<Radio />}
						label="None"
						onClick={handleNone}
					/>
					<FormControlLabel
						value="1-5"
						control={<Radio />}
						label="1-5 Mins"
						onClick={handleFilterDurationOneToFive}
					/>
					<FormControlLabel
						value="6-10"
						control={<Radio />}
						label="6-10 Mins"
						onClick={handleFilterDurationSixToTen}
					/>
					<FormControlLabel
						value="11-15"
						control={<Radio />}
						label="11-15 Mins"
						onClick={handleFilterDurationElevenToFifteen}
					/>
					<FormControlLabel
						value="16-20"
						control={<Radio />}
						label="16-20 Mins"
						onClick={handleFilterDurationSixteenToTwenty}
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
}
