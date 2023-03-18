import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { getToken } from "../feature/basicInfo/getToken";
import { loginWithGithub, logoutWithGithub } from "../feature/basicInfo/logWithGithub";
import Button from "../components/Button";
import UserContext from "../contexts/user";

export default function Home(): JSX.Element {
	const { auth, userData, setUserData } = useContext(UserContext);
	console.log(userData);
	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		if (codeParam && localStorage.getItem("githubAccessToken") == null) {
			getToken(codeParam, userData, setUserData);
		}
	}, []);

	return (
		<>
			{auth ? (
				<>
					<div>Hello {userData.login}</div>
					<Button onClick={logoutWithGithub}>logout github</Button>
				</>
			) : (
				<Button onClick={loginWithGithub}>login Github</Button>
			)}
		</>
	);
}
