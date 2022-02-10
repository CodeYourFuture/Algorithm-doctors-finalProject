import { Route, Routes, Navigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navigation from "./pages/Components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import EnergiserPage from "./pages/Components/EnergiserPage";
import Contact from "./pages/Components/Contact";
import PublishEnergiserPage from "./pages/Components/PublishEnergiserPage";
import { useState } from "react";
import Footer from "./pages/Components/Footer";

const App = () => {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	return (
		<div className="app" data-theme={theme}>
			<Navigation
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
				setUser={setUser}
				user={user}
				theme={theme}
				setTheme={setTheme}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							user={user}
							theme={theme}
						/>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/energisers/:id" element={<EnergiserPage />} />
				<Route path="/contact" element={<Contact />} />
				{isLoggedIn ? (
					<Route
						path="/publish"
						element={<PublishEnergiserPage user={user} />}
					/>
				) : (
					<Route path="*" element={<Navigate to="/" />} />
				)}
			</Routes>
			<Footer isLoggedIn={isLoggedIn} />
		</div>
	);
};
export default App;
