import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import "./Home.css";
import EnergiserCards from "./Components/EnergiserCards";
import RandomizerBtn from "./Components/RandomizerBtn";

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
				<ul className="energiserCards">
					<EnergiserCards energisersData={energisersData} />
				</ul>
			</div>
		</main>
	);
}

export default Home;
