import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import Logo from "../images/cyf_brand.png";
import BurgerMenu from "./BurgerMenu";

export default function Navigation({
	isLoggedIn,
	setIsLoggedIn,
	setUser,
	user,
	theme,
	setTheme,
}) {
	return (
		<nav className="navbar">
			<div className="cyf-logo">
				<Link to="/">
					<img width="126" height="40" alt="cyf-logo" src={Logo}></img>
				</Link>
			</div>
			<BurgerMenu
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
				setUser={setUser}
				user={user}
				theme={theme}
				setTheme={setTheme}
			/>
		</nav>
	);
}
