import React, { useState, useEffect } from "react";
import axios from "axios";

const LikeBtn = ({ id, user }) => {
	const [vote, setVote] = useState({
		id: id,
		voteStatus: null,
		userId: "",
	});

	useEffect(() => {
		axios
			.get(`/api/likes/${id}`)
			.then((data) => {
				console.log(data);
				// setVote({ ...vote, voteStatus: data })
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	useEffect(() => {
		setVote({ ...vote, userId: user.googleId });
	}, [user]);

	useEffect(() => {
		setVote({ ...vote, voteStatus: 1 });
	}, []);

	const fetchData = (data) => {
		axios
			.post("/api/likes", data)
			.then((response) => {
				console.log("-------------this respond---------------->", response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const likeButton = (e) => {
		e.preventDefault();
		const { voteStatus } = vote;

		voteStatus != 1
			? setVote({ id: id, voteStatus: 1, userId: user.googleId })
			: setVote({ id: id, voteStatus: 0, userId: user.googleId });

		fetchData(vote);
	};

	const dislikeButton = (e) => {
		e.preventDefault();
		const { voteStatus } = vote;

		voteStatus != 2
			? setVote({ id: id, voteStatus: 2, userId: user.googleId })
			: setVote({ id: id, voteStatus: 0, userId: user.googleId });

		fetchData(vote);
	};

	return (
		<div className="like_dislike_btn">
			<button onClick={likeButton}>{"like"}</button>
			<button onClick={dislikeButton}>{"dislike"}</button>
		</div>
	);
};

export default LikeBtn;
