import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useAuth from "../hooks/useAuth";
import usePagination from "../hooks/usePagination";
import FunctionBar from "../components/FunctionBar";
import { getIssue } from "../feature/getIssue";
import { closeIssue } from "../feature/closeIssue";
import useData from "../hooks/useData";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";

const CloseIssueButton = (issueUrl: URL) => {
	return (
		<Button
			onClick={async () => {
				const res = await closeIssue(issueUrl);
			}}
		>
			close Issue
		</Button>
	);
};

const issuesColumnsConfig = [
	{ Header: "Title", accessor: "title" },
	{
		Header: "Issue No.",
		accessor: "number",
	},
	{
		Header: "Link",
		accessor: "html_url",
		Cell: ({ cell }) => (
			<a href={cell.value} target="_blank">
				⇥
			</a>
		),
	},
	{
		Header: "State",
		accessor: "state",
	},
	{
		Header: "Delete Issue",
		accessor: "url",
		Cell: ({ cell }) => CloseIssueButton(cell.value),
	},
];
const options = ["title", "number", "state"];
export default function IssueList(): JSX.Element {
	const { userData } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const selection = useRef(0);
	const [pagination, setPagination] = useData("issue", location.state.issueUrl);
	const functionButtons = [
		<Button
			key="state"
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
		<SearchBar
			searchBy={selection}
			pagination={pagination}
			setPagination={setPagination}
			key="search"
		></SearchBar>,
		<SelectBar features={options} selection={selection} key="searchby" />,
	];
	return (
		<>
			<div className="hello">
				{location.state?.repoName.toUpperCase().replace("/", " / ")}
			</div>
			<FunctionBar buttons={functionButtons} />
			<Table data={pagination.currentData} columns={issuesColumnsConfig}></Table>
			<Pagination pagination={pagination} setPagination={setPagination}></Pagination>
		</>
	);
}
