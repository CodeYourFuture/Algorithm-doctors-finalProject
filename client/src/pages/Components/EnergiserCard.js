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
		"&:hover": {
			background: "rgba(214, 214, 214, 0.9)",
		},
	},
	EnergiserName: {
		"text-transform": "lowercase",
		"&:first-letter": {
			"text-transform": "uppercase",
		},
	},
}));

const EnergiserCard = ({ energiserCard, handleNavigate, isLoggedIn, user, theme }) => {
	const { id, name, description, participants, duration, type } = energiserCard;
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
			const res = await axios
				.post("/api/likes", vote)
				.then((res) => {
					if (res.status != 200) {
						throw new Error(res.statusText);
					}
					return res.data;
				})
				.catch((err) => {
					console.error(err);
				});
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
					height: "100%",
					width: "100%",
				}}
			>
				<div style={{ cursor: "pointer" }} onClick={() => handleNavigate(id)}>
					<CardContent
						sx={{
							background: theme ?? "white",
							height: "100%",
							padding: 3,
							transition: "1s",
						}}
						className={classes.CardHoverArea}
					>
						<div>
							<Typography
								sx={{ height: "4rem" }}
								variant="h5"
								component="div"
								className={classes.EnergiserName}
							>
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
							<Typography sx={{ fontSize: 15 }} gutterBottom>
								{type}
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
