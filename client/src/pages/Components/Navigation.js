import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import Logo from "../images/cyf_brand.png";


 export default function Navigation(){
return (
	<nav className="navbar">
		<div className="cyf-logo">
			<Link to="/">
				<img
					width="126"
					height="40"
					alt="cyf-logo"
					src={Logo}

				></img>
			</Link>
		</div>
		<div className="nav-links">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact us</Link>
			<Link to="/publish">Publish Energiser</Link>
		</div>
	</nav>
);
 }



