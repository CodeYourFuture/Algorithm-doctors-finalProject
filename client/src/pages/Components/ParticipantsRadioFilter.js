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

const handleFilterParticipants1To5 = () => {
    const filterData = originalData.filter(
        (energiser) => energiser.participants >= 1 && energiser.participants <= 5
    );
    setEnergisersData(filterData);
};

const handleFilterParticipants6To10 = () => {
    const filterData = originalData.filter(
        (energiser) => energiser.participants >= 6 && energiser.participants <= 10
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

const handleFilterParticipants16To20 = () => {
    const filterData = originalData.filter(
        (energiser) =>
            energiser.participants >= 16 && energiser.participants <= 20
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
                Filter By Participants
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
                    label="1-5"
                    onClick={handleFilterParticipants1To5}
                />
                <FormControlLabel
                    value="6-10"
                    control={<Radio />}
                    label="6-10"
                    onClick={handleFilterParticipants6To10}
                />
                <FormControlLabel
                    value="11-15"
                    control={<Radio />}
                    label="11-15"
                    onClick={handleFilterParticipants11To15}
                />
                <FormControlLabel
                    value="16-20"
                    control={<Radio />}
                    label="16-20"
                    onClick={handleFilterParticipants16To20}
                />
            </RadioGroup>
        </FormControl>
    </div>
);
}