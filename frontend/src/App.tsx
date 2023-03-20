import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import List from "./pages/List";

function App() {
	return (
		<>
			<Router>
				<div id="body">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/list" element={<List />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
