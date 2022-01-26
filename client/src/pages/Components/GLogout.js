import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

export default function GLogout({ setIsLoggedIn }) {
	const onSuccess = () => {
        setIsLoggedIn(false);
	};
	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			></GoogleLogout>
		</div>
	);
}