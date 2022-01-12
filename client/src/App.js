import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import EnergiserPage from "./pages/Components/EnergiserPage";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/energisers/:id" element={<EnergiserPage />} />
	</Routes>
);

export default App;
