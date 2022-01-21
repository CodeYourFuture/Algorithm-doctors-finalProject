import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function SideList({ filterData, setEnergisersData, originalData }) {
	console.log(originalData);
	const handleFilterUpto10 = () => {
		const newFilter = originalData.filter(
			(energiser) => energiser.duration >= 5 && energiser.duration <= 10
		);
		setEnergisersData(newFilter);
	};
	const filterTenTo15 = () => {
		const newFilter = originalData.filter(
			(energiser) => energiser.duration >= 10 && energiser.duration <= 15
		);
		setEnergisersData(newFilter);
	};
	const filter15AndAbove = () => {
		const newFilter = originalData.filter(
			(energiser) => energiser.duration >= 15
		);
		setEnergisersData(newFilter);
	};
	const handleBack = () => {
		setEnergisersData(originalData);
	};
	const handelParticipants5 = () => {
		const newFilter = filterData.filter(
			(energiser) => energiser.participants >= 5 && energiser.participants <= 10
		);
		setEnergisersData(newFilter);
	};
	const handelParticipants10 = () => {
		const newFilter = filterData.filter(
			(energiser) =>
				energiser.participants >= 10 && energiser.participants <= 15
		);
		setEnergisersData(newFilter);
	};
	const handelParticipants15 = () => {
		const newFilter = filterData.filter(
			(energiser) => energiser.participants >= 15
		);
		setEnergisersData(newFilter);
	};

	return (
		<div style={{ width:"200px" }}>
			<h2 style={{ marginBottom: "10px", width:"200px" }}>Filter by</h2>
			<List
				sx={{
					width: "150px",
					maxWidth: "auto",
					bgcolor: "background.paper",
					position: "relative",
					overflow: "auto",
					"& ul": { padding: 0 },
					height: "150px",
				}}
				subheader={<li />}
			>
				<li>
					<ul>
						<ListSubheader>Duration(mins)</ListSubheader>
						<ListItem
							key={1}
							onClick={handleFilterUpto10}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"5-10"} />
						</ListItem>
						<ListItem
							key={2}
							onClick={filterTenTo15}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"10-15"} />
						</ListItem>
						<ListItem
							key={3}
							onClick={filter15AndAbove}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"15-20"} />
						</ListItem>
						<ListItem
							key={4}
							onClick={handleBack}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"All enegisers"} />
						</ListItem>
					</ul>
				</li>
				<li>
					<ul>
						<ListSubheader>Parcipants(num)</ListSubheader>
						<ListItem
							key={1}
							onClick={handelParticipants5}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"5-10"} />
						</ListItem>
						<ListItem
							key={2}
							onClick={handelParticipants10}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"10-15"} />
						</ListItem>
						<ListItem
							key={3}
							onClick={handelParticipants15}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"15-20"} />
						</ListItem>
						<ListItem
							key={4}
							onClick={handleBack}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"All enegisers"} />
						</ListItem>
					</ul>
				</li>
				<li>
					<ul>
						<ListSubheader>Catagory</ListSubheader>
						<ListItem key={1} style={{ cursor: "pointer" }}>
							<ListItemText primary={"Fun"} />
						</ListItem>
						<ListItem key={2} style={{ cursor: "pointer" }}>
							<ListItemText primary={"Introduction"} />
						</ListItem>
						<ListItem key={3} style={{ cursor: "pointer" }}>
							<ListItemText primary={"Team building"} />
						</ListItem>
						<ListItem
							key={4}
							onClick={handleBack}
							style={{ cursor: "pointer" }}
						>
							<ListItemText primary={"All enegisers"} />
						</ListItem>
					</ul>
				</li>
			</List>
		</div>
	);
}
