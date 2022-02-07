import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeBtn from "./LikeBtn";
import StarRating from "./Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	CardHoverArea: {
		background: "#FFFFFF",
		"&:hover": {
			color: "white",
			background: "#d12f2f",
		},
	},
}));

const EnergiserCard = ({ energiserCard, handleNavigate, isLoggedIn, user }) => {
	const { id, name, description, participants, duration } = energiserCard;
	const [like, setLike] = useState(null);
	const [voteStatus, setVoteStatus] = useState(null);
	const [req, setReq] = useState(false);

	useEffect(() => {
		if (id && user.googleId) {
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
		const postData = async (vote) => {
			const res = await axios.post("/api/likes", vote);
			if (res) {
				setReq(!req);
			}
		};
		if (like) {
			postData(like);
		}
	}, [like]);

	const classes = useStyles();
	return (
		<li className="card-container" key={id}>
			<Card
				sx={{
					minWidth: 275,
					textAlign: "center",
				}}
			>
				<div style={{ cursor: "pointer" }} onClick={() => handleNavigate(id)}>
					<CardContent
						sx={{
							minHeight: "100%",
							height: "100%",
							padding: 3,
							transition: "1s",
						}}
						className={classes.CardHoverArea}
					>
						<div>
							<Typography sx={{ height: "4rem" }} variant="h5" component="div">
								{name}
							</Typography>
							<StarRating id={id} req={req} />
							<Typography sx={{ mt: 1.5, mb: 5, height: "4rem" }}>
								{description.length < 98
									? description
									: `${description.substring(0, 99)}...`}
							</Typography>
							<Typography sx={{ mt: 1.5, fontSize: 15 }}>
								Duration: {duration} Mins
							</Typography>
							<Typography sx={{ fontSize: 15 }} gutterBottom>
								Participants: {participants}
							</Typography>
						</div>
						<div>
							{isLoggedIn ? (
								<LikeBtn
									id={id}
									user={user}
									setLike={setLike}
									voteStatus={voteStatus}
								/>
							) : null}
						</div>
					</CardContent>
				</div>
			</Card>
		</li>
	);
};
export default EnergiserCard;
