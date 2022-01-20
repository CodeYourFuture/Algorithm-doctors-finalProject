import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/Components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import EnergiserPage from "./pages/Components/EnergiserPage";
import Contact from "./pages/Components/Contact";
import PublishEnergiserPage from "./pages/Components/PublishEnergiserPage";

const App = () => (
	<>
		<Navigation />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/energisers/:id" element={<EnergiserPage />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/publish" element={<PublishEnergiserPage />} />
		</Routes>
	</>
);

export default App;
