import axios from "axios";
import { oauthConfig } from "../../oauth.config";
export const closeIssue = (issueUrl: URL) => {
	// axios always cause error
	return fetch(issueUrl, {
		method: "POST",
		body: JSON.stringify({
			state: "close",
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
