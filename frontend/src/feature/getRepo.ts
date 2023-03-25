import { oauthConfig } from "../../oauth.config";
import { decryptTokenFromCookie } from "./AES";

export const getRepo = (repoUrl: URL) => {
	const token = decryptTokenFromCookie("personalAccessToken");
	return fetch(oauthConfig.userRepoPath, {
		method: "GET",
		headers: new Headers({
			Authorization: "token " + token,
			Accept: "application/vnd.github+json",
		}),
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err.message);
			return [];
		});
};
