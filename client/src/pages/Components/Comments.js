import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "36ch",
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: "inline",
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
                setAllMessage([...allMessage, data]);
            })
			.catch((err) => {
				console.error(err);
			});
	}, [id]);

	return (
		<List className={classes.root}>
			<ListItem alignItems="flex-start">
				<ListItemText
					primary="username"
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary"
                            >
                                    {allMessage.map((elem, index) => {
                                        <p key={index}>{elem}</p>;
                                    })
                                    }

							</Typography>
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</List>
	);
}
export default Comments;
