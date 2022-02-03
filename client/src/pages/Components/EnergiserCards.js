import React from "react";
import { useNavigate } from "react-router-dom";
import LikeBtn from "./LikeBtn";
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

const EnergiserCards = ({ energisersData, page, rowsPerPage }) => {
	const navigate = useNavigate();
	const handleNavigate = (id) => {
		navigate(`/energisers/${id}`);
	};
	const classes = useStyles();
	return energisersData
		.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
		.map((energiserCard) => {
			const { id, name, description, participants, duration } = energiserCard;
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
									<Typography sx={{ height: "3rem" }} variant="h5" component="div">
										{name}
									</Typography>
									<Typography sx={{ mt: 1.5, mb: 5, height: "4rem" }}>{description.length<98 ? description : `${description.substring(0, 99)}...`}</Typography>
									<Typography sx={{ mt: 1.5, fontSize: 15 }}>
										Duration: {duration} Mins
									</Typography>
									<Typography sx={{ fontSize: 15 }} gutterBottom>
										Participants: {participants}
									</Typography>
								</div>
								<div>
									<LikeBtn
										existingLikeCount={5}
										onLike={() => console.log("like was clicked")}
										existingDislikeCount={1}
										onDislike={() => console.log("dislike was clicked")}
									/>
								</div>
							</CardContent>
						</div>
					</Card>
				</li>
			);
		});
};

export default EnergiserCards;
