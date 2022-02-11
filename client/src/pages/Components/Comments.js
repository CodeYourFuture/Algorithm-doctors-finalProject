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
	inline: {
		width: "100%",
		maxWidth: "100%",
		display: "inline-block",
		borderBottom: "1px solid lightGray",
		textAlign: "left",
		marginLeft: "20px",
		padding:"20px",
	},
}));
function Comments({ user, id }) {
	const [allMessage, setAllMessage] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		axios
			.get(`/api/comments?id=${id}&user=${user.googleId}`)
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
	}, []);

	return (
		<div className={classes.root}>
			<div alignItems="flex-start">
				{allMessage.map((elem, index) => (
					<div key={index}>
						<Avatar alt="user google img" src={user.imageUrl} />
						<div className={classes.inline}>{elem.message}</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Comments;
