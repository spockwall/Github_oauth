import { oauthConfig } from "../../oauth.config";
export const getRepo = (repoUrl: URL) => {
	return fetch(repoUrl, {
		method: "GET",
		headers: new Headers({
			Authorization: "token " + oauthConfig.token,
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
