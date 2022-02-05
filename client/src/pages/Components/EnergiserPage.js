import React , { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import "../styles/EnergiserPage.css";
import CountdownTimer from "./CountdownTimer";

const EnergiserPage = () => {
	const { id } = useParams();
	const [energiser, setEnergiser] = useState(null);

	useEffect(() => {
		fetch(`/api/energisers/${id}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				setEnergiser(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);
	return (
		<main>
			{energiser?<div>
				<header className='energiser-page-title'>
					<h1>Algorithm Doctors’ Energisers</h1>
				</header>
				<div className='energiser-page-container'>
				<div className="timer">
						<h2 className="energiser-page-name">{energiser[0].name}</h2>
							<CountdownTimer duration={energiser[0].duration} />
						</div>
					<p className='energiser-page-description'>{energiser[0].description}</p>
					<div className='energiser-page-partduration'>
						<p>Participants: {energiser[0].participants}</p>
						<p>{energiser[0].duration} Mins</p>
					</div>
					<p className='energiser-page-how'>How To Run:</p>
					<p className='energiser-page-duration'>{energiser[0].instructions}</p>
				</div>
				</div>:<div>...Loading</div>
				}
		</main>
	);
};

export default EnergiserPage;
