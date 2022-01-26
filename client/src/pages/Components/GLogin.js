import { GoogleLogin } from "react-google-login";
import { RefreshTokenSetup } from "../../utils/RefreshToken";

const clientId = process.env.REACT_APP_CLIENT_ID;


export default function GLogin({ setIsLoggedIn, setUser }) {
	const onSuccess = (res) => {
		console.log("[Login Success] CurrentUser:", res.profileObj);
        setIsLoggedIn(true);
        RefreshTokenSetup(res);
        setUser(res.profileObj);
	};
	const onFailure = (res) => {
		console.log("[Login Failed] res:", res);
	};
	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
				style={{ marginTop: "100px" }}
				isSignedIn={true}
			/>
		</div>
	);
}