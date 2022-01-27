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
	const [rowsPerPage, setRowsPerPage] = useState(2);
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
				setEnergisersData(data);
				setOriginalData(data);
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
			<h1 className="message" data-qa="message">
				{isLoggedIn?`Welcome ${user.givenName} to CYF Energisers`:"Welcome to CYF Energisers"}

			</h1>
			<Sidebar
				setEnergisersData={setEnergisersData}
				originalData={originalData}
				filterData={filter}
			/>

			<DropdownPage setRowsPerPage={setRowsPerPage} />


			<div className="randomSearch">
				<SearchBar
					energisersData={energisersData}
					setEnergisersData={setEnergisersData}
					originalData={originalData}
				/>
				<RandomizerBtn
					setEnergisersData={setEnergisersData}
					originalData={originalData}
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

			<AppPagination
				page={page}
				energisersData={energisersData}
				handleChangePage={handleChangePage}
				rowsPerPage={rowsPerPage}
			/>

			<ul className="energiserCards">
				<EnergiserCards energisersData={energisersData} />
			</ul>

		</main>
	);
}

export default Home;
