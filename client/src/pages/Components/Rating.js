import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import RatingCalculation from "./RatingCalculation";
import axios from "axios";

const labels = {
	0.5: "Very Poor",
	1: "Poor",
	1.5: "Less Interesting",
	2: "Ok",
	2.5: "Good",
	3: "Good",
	3.5: "Interesting",
	4: "Very Interesting",
	4.5: "Excellent",
	5: "Excellent",
};

const StarRating = ({ id , req }) => {
	const [totalVotes, setTotalVotes] = useState([]);
	const [rateValue, setRateValue] = useState(null);

	useEffect(() => {
		axios.get(`/api/star_ratings/${id}`)
			.then((res) => {
				if (res.status!= 200) {
					throw new Error(res.statusText);
				}
				return res.data;
			})
			.then((data) => {
				setTotalVotes(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id, req]);

	useEffect(()=>{
		let value = totalVotes.length > 0 ? RatingCalculation(totalVotes) : null;
         setRateValue(value);
	},[totalVotes]);

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Rating
				name="text-feedback"
				value={rateValue}
				readOnly
				precision={0.5}
				emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
			/>
		</Box>
	);
};

export default StarRating;
