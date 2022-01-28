function Filters( { setEnergisersData, originalData }) {
	const handleFilter10 = () => {
		// console.log(energisersData, "10");
		const newFilter = originalData.filter(
			(energiser) => energiser.duration === 10
		);
		setEnergisersData(newFilter);
	};
	const handleFilter12 = () => {
		// console.log(energisersData, "12");
		const newFilter = originalData.filter(
			(energiser) => energiser.duration === 12
		);
		setEnergisersData(newFilter);
	};
	const handleFilter15 = () => {
		// console.log(energisersData, "15");
		const newFilter = originalData.filter(
			(energiser) => energiser.duration === 15
		);
		setEnergisersData(newFilter);
	};
	const handleBack = () => {
		setEnergisersData(originalData);
	};
	return (
		<div className="filter">
			<h2>Filters</h2>
			<button type="text" onClick={handleFilter10}>
				Filter duration 10mins
			</button>
			<button type="text" onClick={handleFilter12}>
				Filter duration 12mins
			</button>
			<button type="text" onClick={handleFilter15}>
				Filter duration 15mins
			</button>
			<button type="text" placeholder="Filter by duration" onClick={handleBack}>
				All energisers
			</button>
		</div>
	);
}
export default Filters;
