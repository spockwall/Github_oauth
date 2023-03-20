import { oauthConfig, client } from "../../../oauth.config.ts";

export const loginWithGithub = () => {
	const CLIENT_ID = oauthConfig.clientID;
	const AUTHORIZATION_PATH = oauthConfig.authorizationPath;
	const PARAM = "client_id=" + CLIENT_ID;
	window.location.assign(AUTHORIZATION_PATH + "?" + PARAM);
};
