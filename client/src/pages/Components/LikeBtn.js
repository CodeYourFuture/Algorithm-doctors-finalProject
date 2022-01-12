import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function LikeBtn({
	existingLikeCount,
	onLike,
	existingDislikeCount,
	onDislike,
}) {
	// let [likeCount, setLikeCount] = useState(0);
	// let [dislikeCount, setDislikeCount] = useState(0);
	let [userHasLiked, setUserHasLiked] = useState(false);
	let [userHasDisliked, setUserHasDisliked] = useState(false);

	// Create LikeCount event handler
	const thumbsUp = () => {
		if (!userHasLiked) {
			onLike();
		}
		setUserHasLiked(true);
	};
	//Create DislikeCount event handler
	const thumbsDown = () => {
		if (!userHasDisliked) {
			onDislike();
		}
		setUserHasDisliked(true);
	};

	return (
		<div className="">
			<div className="like_dislike_btn">
				<button onClick={thumbsUp} className="btn">
					<FaThumbsUp style={{ color: "blue" }} />
					{userHasLiked ? existingLikeCount + 1 : existingLikeCount}
					{/* {likeCount} */}
				</button>
				<button onClick={thumbsDown} className="btn">
					<FaThumbsDown style={{ color: "red" }} />
					{userHasDisliked ? existingDislikeCount + 1 : existingDislikeCount}
					{/* {dislikeCount} */}
				</button>
			</div>
		</div>
	);
}

export default LikeBtn;




{
	/* <LikeBtn
	existingLikeCount={5}
	onLike={() => console.log("like was clicked")}
	existingDislikeCount={1}
	onDislike={() => console.log("like was clicked")}
/>; */
}
