import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createIssue } from "../feature/createIssue";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

interface IssueContentType {
	issueUrl: URL;
}

export default function IssueCreate(props): JSX.Element {
	const { userData } = useAuth();
	const content = useRef("");
	const title = useRef("");
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					if (content.current.value.length > 30) {
						const res = await createIssue(
							location.state.issueUrl.replace("{/number}", ""),
							title.current.value,
							content.current.value
						);
						if (res.status == 410) {
							window.alert("Not able to write!!");
						} else window.alert("Issue created");
						navigate("/issuelist", {
							state: {
								issueUrl: location.state?.issueUrl,
								repoName: location.state?.repoName,
							},
						});
					} else {
						window.alert("content should be more than 30 words...");
					}
				}}
			>
				<div className="issue-create-container">
					<div className="issue-create-title">
						Title:
						<input
							className="issue-create-title-input"
							type="text"
							ref={title}
							required
						/>
					</div>
					<div className="issue-create-content">Issue Content</div>
					<textarea
						className="issue-create-content-input"
						placeholder="content should be more than 30 words..."
						type="text"
						ref={content}
						required
					/>
					<div className="btn-submit">
						<Button type="submit">submit</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
