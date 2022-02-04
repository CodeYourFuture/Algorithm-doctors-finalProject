const RatingCalculation = (totalVotes) => {
	const likesCount = totalVotes.reduce(
		(a, b) => ({ ...a, [b.like_status]: (a[b.like_status] || 0) + 1 }),
		{}
	);
	let totalLikes = likesCount[1]?likesCount[1]: 0;
	let totalDislike = likesCount[2]?likesCount[2]: 0;
	if (likesCount[1] === null || likesCount[2] === null) {
		return 0;
	}
	let percentage = ((totalLikes / (totalLikes + totalDislike)) * 100).toFixed(
		1
	);
	if (percentage >= 80) {
		return 5;
	} else if (percentage >= 60) {
		return 4;
	} else if (percentage >= 40) {
		return 3;
	} else if (percentage >= 20) {
		return 2;
	} else {
		return 1;
	}
};

export default RatingCalculation;
