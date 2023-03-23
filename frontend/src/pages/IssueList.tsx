import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useAuth from "../hooks/useAuth";
import usePagination from "../hooks/usePagination";
import FunctionBar from "../components/FunctionBar";
import { getIssue } from "../feature/getIssue";
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
	const [pagination, setPagination] = usePagination<Array>([]);
	const fetchData = async () => {
		const res_data: Array[Object] = await getIssue(location.state.issueUrl);
		setPagination({ ...pagination, data: res_data });
	};

	const functionButtons = [
		<Button onClick={fetchData}>Refresh</Button>,
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
		</Button>,
	];
	useEffect(() => {
		if (userData) fetchData();
	}, [userData]);
	return (
		<>
			<div className="hello">{location.state?.repoName}</div>
			<FunctionBar buttons={functionButtons} />
			<Table data={pagination.currentData} columns={issuesColumnsConfig}></Table>
			<Pagination pagination={pagination} setPagination={setPagination}></Pagination>
		</>
	);
	return;
}
