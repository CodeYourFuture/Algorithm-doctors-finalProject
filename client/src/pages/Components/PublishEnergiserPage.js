import { React, useState } from "react";
import "../styles/PublishEnergiserPage.css";
import PublishForm from "./PublishForm";
import SuccessResponse from "./SuccessResponse";

export const PublishEnergiserPage = ({ user }) => {
	const [publishStatus, setPublishStatus] = useState(null);
	const message = "Your energiser is successfully published. Thank you!";
	return (
		<div>
			{publishStatus && publishStatus == "ok"? (
				<SuccessResponse message = {message} />
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
