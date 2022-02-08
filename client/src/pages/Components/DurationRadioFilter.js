import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function DurationRadioButtons({
	setDuration,
}) {

	const handleChange = (event) => {
		setDuration(event.target.value);
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
					defaultValue="0-100"
					onChange={handleChange}
				>
					<FormControlLabel
						value="0-100"
						control={<Radio color="default" />}
						label="None"
					/>
					<FormControlLabel
						value="1-5"
						control={<Radio color="default" />}
						label="1-5 Mins"
					/>
					<FormControlLabel
						value="6-10"
						control={<Radio color="default" />}
						label="6-10 Mins"
					/>
					<FormControlLabel
						value="11-15"
						control={<Radio color="default" />}
						label="11-15 Mins"
					/>
					<FormControlLabel
						value="16-20"
						control={<Radio color="default" />}
						label="16-20 Mins"
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
}
