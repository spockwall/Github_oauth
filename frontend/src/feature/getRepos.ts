import axios from "axios";
export const getRepos = (repos_url: URL) => {
	return axios
		.get(repos_url, {
			headers: {
				Authorization: "token " + localStorage.getItem("githubAccessToken"),
				Accept: "application/vnd.github+json",
			},
			// withCredentials: true,
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err.message);
			return [];
		});
};
