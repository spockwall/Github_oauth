import { oauthConfig } from "../../oauth.config";
import { decryptTokenFromCookie } from "./AES";

export const getIssue = (issueUrl: URL) => {
	const token = decryptTokenFromCookie("personalAccessToken");
	return fetch(issueUrl.replace("{/number}", ""), {
		method: "GET",
		headers: new Headers({
			Authorization: "token " + token,
			Accept: "application/vnd.github+json",
		}),
	})
		.then((res) => {
			console.log(res);
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
