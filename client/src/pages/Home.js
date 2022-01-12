import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import EnergiserCards from "./Components/EnergiserCards";

export function Home() {
	const [energisersData, setEnergisersData] = useState([]);

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
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div >
				<h1 className="message" data-qa="message">
					Welcome to CYF Energisers
				</h1>
				<ul className="energiserCards">
					<EnergiserCards energisersData={energisersData} />
				</ul>
				<Link to="/about/this/site">About</Link>
			</div>
		</main>
	);
}

export default Home;
