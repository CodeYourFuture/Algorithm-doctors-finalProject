import { useState } from "react";
import "../styles/UserImage.css";

export default function UserImage({ user }){
     return (
				<div className="image">
					<img  className="user-image"src={`${user.imageUrl}`} alt="google user"></img>
                    <p className="para">{`${user.name} is logged in!`}</p>
				</div>
			);
}