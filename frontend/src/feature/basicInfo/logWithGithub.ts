import { oauthConfig, client } from "../../../oauth.config.ts";
// import {u}

export const loginWithGithub = () => {
	const CLIENT_ID = oauthConfig.clientID;
	const AUTHORIZATION_PATH = oauthConfig.authorizationPath;
	const PARAM = "client_id=" + CLIENT_ID;
	window.location.assign(AUTHORIZATION_PATH + "?" + PARAM);
};

export const logoutWithGithub = () => {
	localStorage.clear();
	// auth in userContext will be set to false if localstorage is cleared.
	window.location.reload();
};
