import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logoutWithGithub } from "../feature/basicInfo/logout";

export default function NavBar() {
	const { auth, userData } = useAuth();
	const NavItem = (props) => {
		return (
			<div className="navitem">
				<Link to={props.url} style={{ textDecoration: "none" }} className="link">
					{props.children}{" "}
				</Link>
			</div>
		);
	};
	let navList = [
		{
			text: "Home",
			url: "/",
		},
		{
			text: "List",
			url: "/repolist",
		},
	];

	return (
		<nav className="navbar">
			<div className="navbar-item-container">
				{auth ? (
					<>
						{navList.map((item) => (
							<NavItem key={item.url} url={item.url}>
								{item.text}
							</NavItem>
						))}
						<button className="logout btn-blue" onClick={logoutWithGithub}>
							logout
						</button>
					</>
				) : (
					<div>goodwebsite</div>
				)}
			</div>
		</nav>
	);
}
