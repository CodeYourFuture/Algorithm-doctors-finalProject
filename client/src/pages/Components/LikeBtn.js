import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const LikeBtn = ({ id, user, setLike, voteStatus }) => {
	const handleLike = (e,like) => {
		e.stopPropagation();
		if(like==1 && voteStatus!=1) {
			setLike({ id: id, voteStatus: 1, userId: user.googleId });
		} else if(like==2 && voteStatus!=2) {
			setLike({ id: id, voteStatus: 2, userId: user.googleId });
		} else {
			setLike({ id: id, voteStatus: 0, userId: user.googleId });
		}
	};
	return (
		<div className="like_dislike_btn">
			<button onClick={(e) => handleLike(e,1)} className="btn">
				<FaThumbsUp style={{ color: voteStatus == 1 ? "grey" : "lightgrey" }} />
			</button>
			<button onClick={(e) => handleLike(e,2)} className="btn">
				<FaThumbsDown style={{ color: voteStatus == 2 ? "grey" : "lightgrey" }} />
			</button>
		</div>
	);
};

export default LikeBtn;
