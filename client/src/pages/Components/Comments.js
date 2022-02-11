import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));
function Comments({ user, id }) {
	const [allMessage, setAllMessage] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		axios
			.get(`/api/comments?id=${id}`)
			.then((res) => {
				if (res.status != 200) {
					throw new Error(res.statusText);
				}
				return res.data;
			})
			.then((data) => {
				setAllMessage(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);

	return (
		<div className={classes.root}>
			<div className="comment-container">
				{allMessage.map((elem, index) => (
					<div className="single-container" key={index}>
						<div className="user-profile">
							<Avatar className ="user-img" alt="user google img" src={user.imageUrl} />
							<p className="user-comment-name">{user.givenName}</p>
						</div>

						<div className="comment-message">"{elem.message}."</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Comments;
