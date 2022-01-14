import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";


 export default function Navigation(){
return (
	<nav className="navbar">
		<div className="cyf-logo">
			<Link to="/">
				<img
					width="126"
					height="40"
					alt="cyf-logo"
					data-src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
					src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
				></img>
			</Link>
		</div>
		<div className="nav-links">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact us</Link>
		</div>
	</nav>
);
 }



