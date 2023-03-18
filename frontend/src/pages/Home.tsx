import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUserData } from "../feature/basicInfo/getUserData";
import { getToken } from "../feature/basicInfo/getToken";
import { loginWithGithub } from "../feature/basicInfo/loginWithGithub";
// shouldn't this be put into .env?

export default function Home(): JSX.Element {
	const [userData, setUserData] = useState("");

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		if (codeParam && localStorage.getItem("githubAccessToken") === null) {
			getToken(codeParam);
		}
		// getUserData(userData, setUserData);
	}, []);

	return (
		<>
			<Button onClick={loginWithGithub}>login to Github</Button>
			<Button onClick={() => getUserData(userData, setUserData)}>get user data</Button>
			{JSON.stringify(userData)}
		</>
	);
}
