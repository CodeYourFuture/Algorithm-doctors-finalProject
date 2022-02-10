import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import Logo from "../images/cyf_brand.png";
import GLogin from "./GLogin";
import GLogout from "./GLogout";
import UserImage from "./UserImages";
import DarkModeSwitch from "./DarkModeSwitch";


 export default function Navigation({ isLoggedIn,setIsLoggedIn, setUser, user, theme ,setTheme }){
	const handleClick = ()=>{
		{!isLoggedIn?alert("Please log in to publish your energiser!"):null;}
	};
// 	const switchTheme = () => {
// const newTheme = theme === "light" ? "dark" : "light";
// setTheme(newTheme);
// 	};
return (
	<nav className="navbar">
		<div className="cyf-logo">
			<Link to="/">
				<img width="126" height="40" alt="cyf-logo" src={Logo}></img>
			</Link>
		</div>
		<div className="nav-links">
			{/* <button onClick={switchTheme}>Change Theme</button> */}
			<DarkModeSwitch theme={theme} setTheme={setTheme} />
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>


			{isLoggedIn ? (
				<>
				<Link to="/publish" onClick={handleClick}>Publish</Link>
				<GLogout setIsLoggedIn={setIsLoggedIn} /></>
			) : (
				<GLogin setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
			)}
			{isLoggedIn?
				<UserImage user={user} />: null}
		</div>
	</nav>
);
 }



