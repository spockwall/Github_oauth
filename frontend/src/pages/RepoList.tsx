import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FunctionBar from "../components/FunctionBar";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { getRepo } from "../feature/getRepo";
import useAuth from "../hooks/useAuth";
import useData from "../hooks/useData";
import usePagination from "../hooks/usePagination";

const AccessButton = (url: URL, repoName: string) => {
	const navigate = useNavigate();
	return (
		<Button
			onClick={async () => {
				navigate("/issuelist", { state: { issueUrl: url, repoName: repoName } });
			}}
			key="enter"
		>
			enter
		</Button>
	);
};

const reposColumnsConfig = [
	{ Header: "Repository", accessor: "name" },
	{ Header: "Visibility", accessor: "visibility" },
	{ Header: "Issues", accessor: "open_issues" },
	{
		Header: "Access",
		accessor: "full_name",
		Cell: ({ cell }) => AccessButton(cell.row.original.issues_url, cell.value),
	},
];

export default function RepoList(): JSX.Element {
	const { userData } = useAuth();
	const [pagination, setPagination] = useData("repo");
	return (
		<>
			<Table data={pagination.currentData} columns={reposColumnsConfig}></Table>
			<Pagination pagination={pagination} setPagination={setPagination}></Pagination>
		</>
	);
	return;
}
