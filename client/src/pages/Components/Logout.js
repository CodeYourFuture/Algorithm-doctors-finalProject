import Recat from "react";
import { useGoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

function LogoutHooks({ setIsLoggedIn }) {
	const onLogoutSuccess = (res) => {
        setIsLoggedIn(false);
		alert("logged out", res);
	};
	const onFailure = () => {
		console.log("handle failure cases");
	};
	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess,
		onFailure,
	});
	return (
		<button onClick={signOut} className="button">
			<img src="icons/google.svg" alt="google login" className="icon"></img>
			<span className="buttonText">Sign Out</span>
		</button>
	);
}

export default LogoutHooks;