import axios from "axios";
export const getIssue = (issues_url: URL) => {
	return (
		axios
			// {/number} is at the end of url
			.get(issues_url.replace("{/number}", ""), {
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
			})
	);
};
