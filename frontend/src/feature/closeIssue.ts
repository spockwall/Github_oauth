import axios from "axios";
import { decryptTokenFromCookie } from "./AES";
import { oauthConfig } from "../../oauth.config";

export const closeIssue = (issueUrl: URL) => {
	// axios always cause error
	const token = decryptTokenFromCookie("personalAccessToken");
	return fetch(issueUrl, {
		method: "POST",
		body: JSON.stringify({
			state: "close",
		}),
		headers: new Headers({
			Authorization: "token " + token,
			Accept: "application/vnd.github+json",
		}),
	})
		.then((res) => {
			window.alert(
				"closing an issue will take up to few minutes in process. Please click refresh button after few minutes"
			);
			return res;
		})
		.catch((err) => {
			window.alert("Close Issue Failed");
			return err;
		});
};
