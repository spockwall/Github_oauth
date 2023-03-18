import { oauthConfig } from "../../../oauth.config.ts";

export const loginWithGithub = () => {
	const CLIENT_ID = oauthConfig.clientID;
	const AUTHORIZATION_PATH = oauthConfig.authorizationPath;
	const PARAM = "client_id=" + CLIENT_ID;
	console.log(AUTHORIZATION_PATH + "?" + PARAM);
	window.location.assign(AUTHORIZATION_PATH + "?" + PARAM);
};
