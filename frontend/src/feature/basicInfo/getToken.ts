import axios from "axios";
import { server, client } from "../../../oauth.config";

export function getToken(codeParam, userData: Object, setUserData: Function) {
	axios
		.get(server.localUrl + "/getAccessToken", {
			// get github access token
			params: { code: codeParam },
		})
		.then((response) => {
			// set token to localstorage
			const token = response.data.access_token;
			localStorage.setItem("githubAccessToken", token);
			return token;
		})
		.then((token) => {
			// get user data and set user data after goting the token
			axios
				.get(server.localUrl + "/getUserData", {
					headers: {
						// Authorization: "Bearer " + localStorage.getItem("githubAccessToken"),
						Authorization: "Bearer " + token,
					},
				})
				.then((response) => {
					// set user data to localstorage
					const data = JSON.stringify(response.data);
					localStorage.setItem("githubUserData", data);
					setUserData(data);
					// It is a must to redirect to home page to get rid of the query code.
					// Not the best way to redirect
					window.location.href = client.localUrl;
				})
				.catch((err) => {
					console.log(err.message);
				});
		})
		.catch((err) => {
			console.log(err.message);
		});
}
