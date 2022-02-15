import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));
function Comments({ user, allMessage }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className="comment-container">
				{allMessage.map((elem, index) => (
					<div className="single-container" key={index}>
						<div className="user-profile">
							<Avatar className ="user-img" alt="user google img" src={elem.user_img} />
							<p className="user-comment-name">{elem.user_id}</p>
						</div>

						<div className="comment-message">"{elem.message}."</div>
						<div className="comment-date"> {elem.date} </div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Comments;
