import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
	<Menu
		elevation={10}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: "black",
		boxShadow: "black",
		"& .MuiMenu-list": {
			display: "flex",
			"flex-direction": "column",
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: "black",
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: "grey",
			},
		},
	},
}));

const DropdownPage = ({ setRowsPerPage }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (e) => {
		setAnchorEl(null);
		setRowsPerPage(e.target.value);
	};

	return (
		<div>
			<Button
				style={{ backgroundColor: "white" }}
				id="demo-customized-button"
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				Cards per-page
			</Button>
			<StyledMenu
				id="demo-customized-menu"
				MenuListProps={{
					"aria-labelledby": "demo-customized-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose} value={5} disableRipple>
					5 cards per-page
				</MenuItem>
				<MenuItem onClick={handleClose} value={10} disableRipple>
					10 cards per-page
				</MenuItem>
				<MenuItem onClick={handleClose} value={20} disableRipple>
					20 cards per-page
				</MenuItem>
			</StyledMenu>
		</div>
	);
};

export default DropdownPage;
