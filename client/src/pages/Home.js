import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import Filters from "./Components/Filter";
import "./Home.css";
import EnergiserCards from "./Components/EnergiserCards";
import RandomizerBtn from "./Components/RandomizerBtn";
// import Sidebar from "./Components/Sidebar";

export function Home() {
	const [energisersData, setEnergisersData] = useState([]);
	const [originalData, setOriginalData] = useState([]);
	useEffect(() => {
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
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<h1 className="message" data-qa="message">
					Welcome to CYF Energisers
				</h1>
				<Filters
					energisersData={energisersData}
					setEnergisersData={setEnergisersData}
					originalData={originalData}
				/>
				{/* <Sidebar /> */}

				<RandomizerBtn
					energisersData={energisersData}
					setEnergisersData={setEnergisersData}
					originalData={originalData}
				/>

				<SearchBar
					energisersData={energisersData}
					setEnergisersData={setEnergisersData}
					originalData={originalData}
				/>

				<ul className="energiserCards">
					<EnergiserCards energisersData={energisersData} />
				</ul>
			</div>
		</main>
	);
}

export default Home;
