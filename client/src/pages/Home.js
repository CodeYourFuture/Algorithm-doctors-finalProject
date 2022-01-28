import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import "./Home.css";
import EnergiserCards from "./Components/EnergiserCards";
import RandomizerBtn from "./Components/RandomizerBtn";
import Sidebar from "./Components/Sidebar";
import AppPagination from "./Components/Pagination";
import DropdownPage from "./Components/DropdownPage";

export function Home({ user , isLoggedIn }) {
	const [energisersData, setEnergisersData] = useState([]);
	const [originalData, setOriginalData] = useState([]);
	const [filter, setFilter] = useState([]);
	const [page, setPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(6);
	useEffect(() => {
		console.log(user);
		fetch("/api/energisers")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				setOriginalData(data);
				setEnergisersData(data);
				setFilter(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [user]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<main role="main">
			<div className="main-content">
			<h1 className="message" data-qa="message">

				{isLoggedIn
					? `${user.givenName}, Welcome to CYF Energisers`
					: "Welcome to CYF Energisers"}

			</h1>

			<Sidebar
				setEnergisersData={setEnergisersData}
				originalData={originalData}
			/>
			<div className="homeMain">
			<h1 className="message" data-qa="message">
				Welcome to CYF Energisers
			</h1>
			{/* <DropdownPage setRowsPerPage={setRowsPerPage} /> */}
			<div className="randomSearch">
				<RandomizerBtn
					setEnergisersData={setEnergisersData}
					originalData={originalData}
				/>
				<SearchBar
					energisersData={energisersData}
					setEnergisersData={setEnergisersData}
					originalData={originalData}
					setPage={setPage}
				/>
			</div>
			<div>
				<ul className="energiserCards">
					<EnergiserCards
						energisersData={energisersData}
						page={page}
						rowsPerPage={rowsPerPage}
					/>
				</ul>
			</div>
			</div>
			</div>
			<AppPagination
				page={page}
				energisersData={energisersData}
				handleChangePage={handleChangePage}
				rowsPerPage={rowsPerPage}
			/>
		</main>
	);
}

export default Home;
