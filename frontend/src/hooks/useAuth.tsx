import { useContext, useEffect } from "react";
import UserContext from "../contexts/user";
import { getUserInfo } from "../feature/basicInfo/getUserInfo";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
	const userState = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		if (codeParam && localStorage.getItem("githubAccessToken") == null) {
			localStorage.clear();
			getUserInfo(codeParam, userState);
		} else if (localStorage.getItem("githubAccessToken") == null) {
			localStorage.clear();
			navigate("/login");
		}
	}, []);
	return { auth: userState.auth, userData: userState.userData };
};

export default useAuth;
