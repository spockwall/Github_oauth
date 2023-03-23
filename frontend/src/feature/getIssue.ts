import { oauthConfig } from "../../oauth.config";
export const getIssue = (issueUrl: URL) => {
	return fetch(issueUrl.replace("{/number}", ""), {
		method: "GET",
		headers: new Headers({
			Authorization: "token " + oauthConfig.token,
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
