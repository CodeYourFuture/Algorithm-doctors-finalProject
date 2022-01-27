import React from "react";

import { useGoogleLogin } from "react-google-login";
import { RefreshTokenSetup } from "../../utils/RefreshToken";

const clientId = process.env.REACT_APP_CLIENT_ID;

function LoginHooks({ setIsLoggedIn, setUser }) {
	const onSuccess = (res) => {
        setIsLoggedIn(true);
		console.log("Login success: currentUser:", res.profileObj);
		RefreshTokenSetup(res);
	    setUser(res.profileObj);
	};
	const onFailure = (res) => {
		console.log("login failed:", res);
	};
	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: true,
		accessType: "offline",
	});

	return (
		<button onClick={signIn} className="button">
			<span className="buttonText">Sign in with Google</span>
		</button>
	);
}

export default LoginHooks;