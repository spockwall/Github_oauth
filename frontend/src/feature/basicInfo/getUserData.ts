import axios from "axios";
import { serverUrl } from "../../../oauth.config";

export const getUserData = (userData: object, setUserData: Function) => {
	axios
		.get(serverUrl.localUrl + "/getUserData", {
			headers: { Authorization: "Bearer " + localStorage.getItem("githubAccessToken") },
		})
		.then((response) => {
			setUserData(response.data);
		})
		.catch((err) => {
			console.log(err.message);
		});
};
