import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	ViewSidebarButton: {
		marginTop: "10%",
		padding: "5px",
		width: "150px",
		borderRadius: "10px",
		boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
		background: "#FFFFFF",
		"&:hover": {
			color: "white",
			background: "#d12f2f",
		},
	},
}));

export default function SideBarDrawer({ originalData, setEnergisersData }) {
	const [state, setState] = React.useState({ left: false });

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: "100%", backgroundColor: "transparent" }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div className="sortFilterInSidebar">
				<Sidebar
					setEnergisersData={setEnergisersData}
					originalData={originalData}
				/>
			</div>
		</Box>
	);
	const classes = useStyles();
	return (
		<div>
			{["left"].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button
						className={classes.ViewSidebarButton}
						variant="contained"
						onClick={toggleDrawer(anchor, true)}
					>
						{" "}
						View Sidebar
					</Button>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}
