import { logoutWithGithub } from "../feature/basicInfo/logout";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(): JSX.Element {
	const { auth, userData } = useAuth();
	const navigate = useNavigate();

	return (
		<>
			<div>Hello {userData?.login}</div>
			<Button onClick={logoutWithGithub}>logout github</Button>
			<Button
				onClick={() => {
					navigate("/list");
				}}
			>
				go to repos list
			</Button>
		</>
	);
}
