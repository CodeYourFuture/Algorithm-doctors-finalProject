import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeBtn from "./LikeBtn";
import StarRating from "./Rating";

const EnergiserCard = ({ energiserCard, handleNavigate, isLoggedIn, user }) => {
	const { id, name, description, participants, duration } = energiserCard;
	const [like, setLike] = useState({});
    const [voteStatus, setVoteStatus] = useState(null);
    const [req, setReq] = useState(false);

	useEffect(() => {
        if (id && user.googleId){
		axios
			.get(`/api/likes?id=${id}&user=${user.googleId}`)
			.then((res) => {
				setVoteStatus(res.data[0].like_status);
			})
			.catch((error) => {
				console.log(error);
			});
}
	}, [id, user, req]);

	useEffect(() => {
		postData();
	}, [like]);

    const postData = async () =>{
       const res = await axios.post("/api/likes", like);
       if(res) {
           setReq(!req);
       }
    };

	return (
		<li className="card-container" key={id}>
			<div className="card text-center">
				<div className="card-body" onClick={() => handleNavigate(id)}>
					<h2 className="card-title">{name}</h2>
					<StarRating id={id} req={req} />
					<p className="card-text">{description}</p>
					<p className="card-text">{duration} Mins</p>
					<p className="card-text">Participants: {participants}</p>
				</div>
				{isLoggedIn ? (
					<LikeBtn id={id} user={user} setLike={setLike} voteStatus={voteStatus} />
				) : null}
			</div>
		</li>
	);
};
export default EnergiserCard;
