import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function DurationRadioButtons({
    setParticipants,
}) {

const handleChange = (event) => {
    setParticipants(event.target.value);
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
                defaultValue="0-100"
                onChange={handleChange}
            >
                <FormControlLabel
                    value="0-100"
                    control={<Radio />}
                    label="None"
                />
                <FormControlLabel
                    value="1-5"
                    control={<Radio />}
                    label="1-5"
                />
                <FormControlLabel
                    value="6-10"
                    control={<Radio />}
                    label="6-10"
                />
                <FormControlLabel
                    value="11-15"
                    control={<Radio />}
                    label="11-15"
                />
                <FormControlLabel
                    value="16-20"
                    control={<Radio />}
                    label="16-20"
                />
            </RadioGroup>
        </FormControl>
    </div>
);
}