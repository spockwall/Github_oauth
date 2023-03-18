import axios from "axios";
import { serverUrl } from "../../../oauth.config";

export const getToken = (codeParam) => {
	axios
		.get(serverUrl.localUrl + "/getAccessToken", {
			params: { code: codeParam },
		})
		.then((response) => {
			const token = response.data.access_token;
			if (token) {
				localStorage.setItem("githubAccessToken", token);
			}
		})
		.catch((err) => {
			console.log(err.message);
		});
};
