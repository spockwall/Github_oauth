import { oauthConfig } from "../../oauth.config";
export const createIssue = (issueUrl: URL, title: string, content: string) => {
	return fetch(issueUrl, {
		method: "POST",
		body: JSON.stringify({
			title: title,
			body: content,
		}),
		headers: new Headers({
			Authorization: "token " + oauthConfig.token,
			Accept: "application/vnd.github+json",
		}),
	})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
};
