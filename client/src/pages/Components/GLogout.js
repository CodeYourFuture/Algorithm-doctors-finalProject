import { GoogleLogout } from "react-google-login";

const clientId = "479667636182-ntli9lll3feqb5dgkmqlvnofterqjjc9.apps.googleusercontent.com";

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