import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RepoList from "./pages/RepoList";
import IssueList from "./pages/IssueList";
import IssueCreate from "./pages/IssueCreate";
import NavBar from "./components/NavBar";
import "./css/nav.css";
import "./css/table.css";
import "./css/pagination.css";
import "./css/button.css";
import "./css/issue.css";
import "./css/bar.css";
import "./css/login.css";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<div id="body">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/repolist" element={<RepoList />} />
						<Route path="/issuelist" element={<IssueList />} />
						<Route path="/issuecreate" element={<IssueCreate />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
