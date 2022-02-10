import "../styles/Response.css";

export default function SuccessResponse({ message }) {
	return (
		<div className="success-message">
			<p className="success">
				{message}
			</p>
		</div>
	);
}
