import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logoutWithGithub } from "../feature/basicInfo/logout";
import good from "../assets/good.png";

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
						<button className="logout btn-blue btn" onClick={logoutWithGithub}>
							logout
						</button>
					</>
				) : (
					<div>GOOD WEBSITE</div>
				)}
			</div>
		</nav>
	);
}
