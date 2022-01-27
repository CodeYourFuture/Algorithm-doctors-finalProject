import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import Logo from "../images/cyf_brand.png";
import GLogin from "./GLogin";
import GLogout from "./GLogout";
import { Logout } from "@mui/icons-material";
import UserImage from "./UserImage";
// import LogoutHooks from "./Logout";
// import LoginHooks from "./Login";


 export default function Navigation({ isLoggedIn,setIsLoggedIn, setUser, user }){

return (
	<nav className="navbar">
		<div className="cyf-logo">
			<Link to="/">
				<img width="126" height="40" alt="cyf-logo" src={Logo}></img>
			</Link>
		</div>
		<div className="nav-links">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/publish">Publish</Link>
			{isLoggedIn ? (
				<GLogout setIsLoggedIn={setIsLoggedIn} />
			) : (
				// <LogoutHooks setIsLoggedIn={setIsLoggedIn} />
				<GLogin setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
				// <LoginHooks setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
			)}
			<div>{isLoggedIn ? <UserImage user={user} /> : null}</div>
		</div>
	</nav>
);
 }



