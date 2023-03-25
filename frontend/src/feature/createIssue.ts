import { oauthConfig } from "../../oauth.config";
import { decryptTokenFromCookie } from "./AES";
export const createIssue = (issueUrl: URL, title: string, content: string) => {
	const token = decryptTokenFromCookie("personalAccessToken");
	return fetch(issueUrl, {
		method: "POST",
		body: JSON.stringify({
			title: title,
			body: content,
		}),
		headers: new Headers({
			Authorization: "token " + token,
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
