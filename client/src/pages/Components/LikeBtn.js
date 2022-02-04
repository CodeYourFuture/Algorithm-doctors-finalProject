import React from "react";

const LikeBtn = ({ id, user, setLike, voteStatus }) => {
	const handleLike = (like) => {
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
			<button style={{ backgroundColor: voteStatus==1? "blue" : "yellow" }} onClick={()=> handleLike(1)}>{"like"}</button>
			<button style={{ backgroundColor: voteStatus==2? "red" : "yellow" }} onClick={()=> handleLike(2)}>{"dislike"}</button>
		</div>
	);
};

export default LikeBtn;
