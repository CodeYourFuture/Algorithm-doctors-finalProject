import React, { useState } from "react";
import RightNav from "./RightNav";

export default function BurgerMenu({ setIsLoggedIn,user,isLoggedIn,setUser }){
    const [openMenu, setOpenMenu] = useState(false);

    const onClick = ()=>{
       setOpenMenu(!openMenu);
    };
    return (
			<>
				<div
					className="burger-menu"
					role="button"
					tabIndex={0}
					onClick={onClick}
                    style={{ zIndex:5 }}
				>
					<div
						style={{
							backgroundColor: openMenu ? "grey" : "black",
							transform: openMenu ? "rotate(45deg)" : "rotate(0)",
						}}
					></div>
					<div
						style={{
							backgroundColor: openMenu ? "grey" : "black",
							transform: openMenu ? "translateX(100%)" : "translateX(0)",
							opacity: openMenu ? 0 : 1,
						}}
					></div>
					<div
						style={{
							backgroundColor: openMenu ? "grey" : "black",
							transform: openMenu ? "rotate(-45deg)" : "rotate(0)",
						}}
					></div>
				</div>
				<RightNav
                    openMenu={openMenu}
					setIsLoggedIn={setIsLoggedIn}
					setUser={setUser}
					user={user}
					isLoggedIn={isLoggedIn}
				/>
			</>
		);

}
