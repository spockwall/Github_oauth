import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { getIssue } from "../feature/getIssue";
import useAuth from "../hooks/useAuth";
import usePagination from "../hooks/usePagination";
import { createIssue } from "../feature/createIssue";
import { closeIssue } from "../feature/closeIssue";

const CloseIssueButton = (issueUrl: URL) => {
	return (
		<Button
			onClick={async () => {
				const res = await closeIssue(issueUrl);
				window.alert(
					"closing an issue will take up to few minutes in process. Please click refresh button after few minutes"
				);
			}}
		>
			close Issue
		</Button>
	);
};

const issuesColumnsConfig = [
	{ Header: "Title", accessor: "title" },
	{
		Header: "Body",
		accessor: "body",
	},
	{
		Header: "Url",
		accessor: "html_url",
	},
	{ Header: "Delete Issue", accessor: "url", Cell: ({ cell }) => CloseIssueButton(cell.value) },
];

export default function IssueList(): JSX.Element {
	const { userData } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const [issues, setIssues] = useState<Array[Object]>([]);
	const [pagination, setPagination] = usePagination<Array>([]);
	const fetchData = async () => {
		const res_data = await getIssue(location.state.issueUrl);
		console.log(res_data);
		setIssues(res_data);
		setPagination({ ...pagination, data: res_data });
	};

	useEffect(() => {
		if (userData) fetchData();
	}, [userData]);
	return (
		<>
			<div className="hello">Repository: {location.state?.repoName}</div>
			<Button onClick={fetchData}>Refresh</Button>
			<Button
				onClick={() => {
					navigate("/issuecreate", {
						state: {
							issueUrl: location.state?.issueUrl,
							repoName: location.state?.repoName,
						},
					});
				}}
			>
				New Issue
			</Button>
			<Table data={pagination.currentData} columns={issuesColumnsConfig}></Table>
			<Pagination pagination={pagination} setPagination={setPagination}></Pagination>
		</>
	);
	return;
}
