import Button from "@mui/material/Button";
import Sort from "./Sort";
import Filter from "./Filter";

export default function Sidebar({ originalData, setEnergisersData }) {
    const handleResetEnergisers = () => {
        setEnergisersData(originalData);
    };
	return (
		<div className="sideBar">
            <div className="resetBtn">
            <Button sx={{ width: 230 }} variant="outlined" onClick={handleResetEnergisers}>Reset Energisers</Button>
            </div>
			<Sort setEnergisersData={setEnergisersData} originalData={originalData} />
            <Filter setEnergisersData={setEnergisersData} originalData={originalData} />
		</div>
	);
}
