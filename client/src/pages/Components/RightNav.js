import { Link } from "react-router-dom";
import GLogin from "./GLogin";
import GLogout from "./GLogout";
import UserImage from "./UserImages";
import DarkModeSwitch from "./DarkModeSwitch";
import styled from "styled-components";

const Ul = styled.ul`
list-style:none;
display:flex;
flex-flow:row nowrap;
display: flex;
align-items:center;
justify-content:flex-end;
width: 40%;
list-style: none;
right: 5px;
top: 10px;

a{
  padding: 14px 16px;
  color: rgb(10, 9, 9);
  transition: 0.5s ease;
}
a:hover{
  background-color: transparent;
  text-decoration: underline;
}

li{
	padding: 18px 10px
	height: 60px;
}
li a{
  color:black;
  font-size:large;
  font-weight: bolder;
}
li:hover{
   transform: translateY(-2px);
   transition: 0.5s ease-in-out;
}
@media(max-width: 768px){
  flex-flow: column-reverse nowrap;
  justify-content: space-around;
  height: auto;
  transform:${({ openMenu }) =>
		openMenu ? "translateX(0)" : "translateX(100%)"};
  position: fixed;
  right: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  background-color:#26272b ;
  border-radius: 5px;
  padding-top: 3.5rem;
  z-index: 3;
  transition: 0.35s ease-in-out;
  li a{
	color:white;
}
}

`;

export default function RightNav({ isLoggedIn,handleClick,setIsLoggedIn,setUser,user, openMenu, theme, setTheme }){
    return (
			<Ul
				className="nav-links"
				openMenu={openMenu}
			>
				<li>
<DarkModeSwitch theme={theme} setTheme={setTheme} />
				</li>
				<li>
					<Link to="/" >Home</Link>
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
			</Ul>
		);
}