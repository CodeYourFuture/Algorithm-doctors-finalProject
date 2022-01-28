import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DurationRadioButtons from "./DurationRadioFilter";
import ParticipantsRadioFilter from "./ParticipantsRadioFilter";
import Sort from "./Sort";
export default function Sidebar({
	originalData,
	setEnergisersData,
}) {
	const [duration, setDuration] = useState("none");
	const [participants, setParticipants] = useState("none");
	const handleResetEnergisers = () => {
		setEnergisersData(originalData);
	};
	const getNumbers = (str) => {
		return [str.split("-")[0], str.split("-")[1]];
	};
    const handleFilters = () => {
        const dura = getNumbers(duration);
        const part = getNumbers(participants);
        const filterData = originalData.filter(
            (energiser) => energiser.participants >= part[0] && energiser.participants <= part[1] && energiser.duration >= dura[0] && energiser.duration <= dura[1]
        );
        setEnergisersData(filterData);
    };
    useEffect(() => {
    handleFilters();
    },[duration, participants]);

	console.log(duration, participants);
	return (
		<div className="sideBar">
			<div className="resetBtn">
				<Button
					sx={{ width: 270, marginTop: "1rem" }}
					variant="outlined"
					onClick={handleResetEnergisers}
				>
					Reset Energisers
				</Button>
			</div>
            <Sort originalData={originalData} setEnergisersData={setEnergisersData} />
			<div className="filters">
            <DurationRadioButtons
				setDuration={setDuration}
			/>
			<ParticipantsRadioFilter
				setParticipants={setParticipants}
			/>
            </div>
		</div>
	);
}
