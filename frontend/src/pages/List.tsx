import { useState } from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { getIssue } from "../feature/getIssues";
import { getRepos } from "../feature/getRepos";
import useAuth from "../hooks/useAuth";
import usePagination from "../hooks/usePagination";

interface RepoListType {
	repos: Array[Object];
	setRepos: Function;
}

export default function List(): JSX.Element {
	const { userData } = useAuth();
	const [repos, setRepos] = useState<Array[Object]>([]);
	const [pagination, setPagination] = usePagination([]);
	return (
		<>
			<Button
				onClick={async () => {
					const res_data = await getRepos(userData.repos_url);
					setRepos(res_data);
					setPagination({ ...pagination, data: res_data });
				}}
			>
				get Repo data
			</Button>
			<Table data={pagination.currentData}></Table>
			<Pagination pagination={pagination} setPagination={setPagination}></Pagination>
		</>
	);
	return;
}
