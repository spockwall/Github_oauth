import { useEffect } from "react";
import Pagination from "../components/Pagination";
import { getRepo } from "../feature/getRepo";
import { getIssue } from "../feature/getIssue";
import useAuth from "./useAuth";
import usePagination from "./usePagination";

export default function useData(type: "repo" | "issue", dataUrl?: URL | string) {
	const { userData } = useAuth();
	const [pagination, setPagination] = usePagination<Array>([]);
	const fetchData = async () => {
		let res_data: Array[Object];
		if (type == "repo") {
			res_data = await getRepo(dataUrl ?? userData?.repos_url);
		} else if (type == "issue") {
			res_data = await getIssue(dataUrl ?? userData?.repos_url);
		}
		setPagination({ ...pagination, data: res_data ?? [] });
	};

	useEffect(() => {
		if (userData) fetchData();
	}, [userData]);
	return [pagination, setPagination];
}
