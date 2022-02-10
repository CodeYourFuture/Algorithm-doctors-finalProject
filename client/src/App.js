import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./pages/Components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import EnergiserPage from "./pages/Components/EnergiserPage";
import Contact from "./pages/Components/Contact";
import PublishEnergiserPage from "./pages/Components/PublishEnergiserPage";
import { useState } from "react";
import Footer from "./pages/Components/Footer";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	return (
		<>
			<Navigation
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
				setUser={setUser}
				user={user}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							user={user}
						/>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/energisers/:id" element={<EnergiserPage />} />
				<Route path="/contact" element={<Contact />} />
				{/* {isLoggedIn ? ( */}
					<Route
						path="/publish"
						element={<PublishEnergiserPage user={user} />}
					/>
				{/* ) : ( */}
					{/* <Route path="*" element={<Navigate to="/" />} />
				)} */}
			</Routes>
			<Footer isLoggedIn={isLoggedIn} />
		</>
	);
};
export default App;
