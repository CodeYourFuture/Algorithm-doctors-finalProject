import React from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {
		position: "fixed",
		bottom: 0,
		zIndex: 200,
		backgroundColor: "#dcdcdc",
		padding: "10px 80px",
		color: "black",
		width: "100%",
	},
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "black",
	},
	center: {
		display: "flex",
		justifyContent: "center",
	},
}));

const AppPagination = ({
	page,
	energisersData,
	handleChangePage,
	rowsPerPage,
}) => {
	const classes = useStyles();
	const pageCount = Math.ceil(energisersData.length / rowsPerPage);
	return (
		<div className={classes.container}>
			<div className={classes.root}>
				<Pagination
					style={{ display: "flex", justifyContent: "center" }}
					count={pageCount}
					page={page}
					onChange={handleChangePage}
					variant="outlined"
					color="primary"
					size="small"
					defaultPage={1}
					showFirstButton
					showLastButton
				/>
			</div>
		</div>
	);
};

export default AppPagination;