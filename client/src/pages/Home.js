import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import "./Home.css";
import EnergiserCards from "./Components/EnergiserCards";
import RandomizerBtn from "./Components/RandomizerBtn";
import Sidebar from "./Components/Sidebar";
import AppPagination from "./Components/Pagination";
import SideBarDrawer from "./Components/SidebarDrawer";

export function Home({ user, isLoggedIn, theme }) {
	const [energisersData, setEnergisersData] = useState([]);
	const [originalData, setOriginalData] = useState([]);
	const [page, setPage] = useState(1);
	const rowsPerPage = 6;
	useEffect(() => {
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
				<div className="sideBar">
					<Sidebar
						setEnergisersData={setEnergisersData}
						originalData={originalData}
					/>
				</div>
				<div className="sidebarDrawer">
					<SideBarDrawer
						setEnergisersData={setEnergisersData}
						originalData={originalData}
					/>
				</div>
				<div className="homeMain">
					<h1 className="message" data-qa="message">
						{isLoggedIn
							? `${user.givenName}, Welcome to CYF Energisers`
							: "Welcome to CYF Energisers"}
					</h1>
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
								isLoggedIn={isLoggedIn}
								user={user}
								theme={theme}
							/>
						</ul>
						<div
							className="pagDiv"
							style={{
								visibility: energisersData.length <= 0 ? "hidden" : "visible",
							}}
						>
							<AppPagination
								page={page}
								energisersData={energisersData}
								handleChangePage={handleChangePage}
								rowsPerPage={rowsPerPage}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
