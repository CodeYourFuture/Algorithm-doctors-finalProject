import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImMenu, ImCross } from "react-icons/im";
import "../styles/Navigation.css";
import Logo from "../images/cyf_brand.png";
import GLogin from "./GLogin";
import GLogout from "./GLogout";
import UserImage from "./UserImages";


 export default function Navigation({ isLoggedIn,setIsLoggedIn, setUser, user }){
    const [openMenu, setOpenMenu]= useState(false);
	const handleClick = ()=>{
     setOpenMenu(!openMenu);
	};
return (
	<nav className="navbar">
		<div className="cyf-logo">
			<Link to="/">
				<img width="126" height="40" alt="cyf-logo" src={Logo}></img>
			</Link>
		</div>
		<div className="menu-icons" onClick={handleClick}>
			{openMenu ? <ImCross /> : <ImMenu />}
		</div>
		<ul className="nav-links">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>

			{isLoggedIn ? (
				<>
					<li>
						<Link to="/publish" onClick={handleClick}>
							Publish
						</Link>
					</li>
					<li>
						<GLogout setIsLoggedIn={setIsLoggedIn} />
					</li>
				</>
			) : (
				<li>
					<GLogin setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
				</li>
			)}
			{isLoggedIn ? (
				<li>
					<UserImage user={user} />{" "}
				</li>
			) : null}
		</ul>
	</nav>
);
 }



