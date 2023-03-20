import axios from "axios";
import { parse } from "dotenv";
import { server, client } from "../../../oauth.config";
import { userStateType } from "../../contexts/user";

function getUserData(token: string, setUserData: Function) {
	axios
		.get(server.localUrl + "/getUserData", {
			headers: {
				Authorization: "Bearer " + token,
			},
		})
		.then((response) => {
			setUserData(response.data);
			localStorage.setItem("githubUserData", JSON.stringify(response.data)); // set user data to localstorage
			window.location.href = "/"; // It is a must to redirect to home page to get rid of the query code.
		})
		.catch((err) => {
			console.log(err.message);
		});
}

export function getUserInfo(codeParam, userState: userStateType) {
	const { auth, setAuth, userData, setUserData } = userState;
	axios
		.get(server.localUrl + "/getAccessToken", {
			params: { code: codeParam }, // get github access token
		})
		.then((response) => {
			const token = response.data.access_token;
			localStorage.setItem("githubAccessToken", token); // set token to localstorage
			setAuth(true);
			getUserData(token, setUserData); // get user data and set user data after getting access token
		})
		.catch((err) => {
			console.log(err.message);
		});
}
