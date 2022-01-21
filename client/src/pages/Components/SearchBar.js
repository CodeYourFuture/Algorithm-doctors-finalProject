import React, { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ClearIcon from "@mui/icons-material/Clear";

function SearchBar({  setEnergisersData, originalData }) {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = originalData.filter((value) => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});
		setEnergisersData(newFilter);

		if (searchWord === "") {
			setFilteredData([]);
			setEnergisersData(originalData);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered("");
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					type="text"
					placeholder="Search For An Energiser..."
					value={wordEntered}
					onChange={handleFilter}
				/>
				<div className="searchIcon">
					{filteredData.length === 0 ? (
						<ManageSearchIcon />
					) : (
						<ClearIcon id="clearBtn" onClick={clearInput} />
					)}
				</div>
			</div>
			{filteredData.length != 0 && (
				<div className="dataResult">
					{filteredData.map((value, key) => {
						return (
							<div key={key}>
								<Link to={`/energisers/${value.id}`}>{value.name}</Link>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SearchBar;

