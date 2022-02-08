import { React, useState } from "react";
import "../styles/PublishEnergiserPage.css";
import PublishForm from "./PublishForm";

export const PublishEnergiserPage = ({ user }) => {
	const [publishStatus, setPublishStatus] = useState(null);

	return (
		<div>
			{publishStatus && publishStatus == "ok"? (
				<div>
					<h1>Your Energiser successfully publish</h1>
				</div>
			) : publishStatus === "error" ? (
				<div>
					<h1>Sorry</h1>
					<PublishForm setPublishStatus={setPublishStatus} user={user} />
				</div>
			) : (
				<PublishForm setPublishStatus={setPublishStatus} user={user} />
			)}
		</div>
	);
};

export default PublishEnergiserPage;
