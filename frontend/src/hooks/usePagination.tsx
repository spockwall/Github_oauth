import { useState, useEffect } from "react";

export default function usePagination(initData) {
	const initState = {
		data: [], // array of obj
		offset: 0,
		numberPerPage: 5,
		pageCount: 0,
		currentData: [],
		selected: 0,
		forceRerender: 0,
	};

	const [pagination, setPagination] = useState(initState);
	useEffect(() => {
		setPagination({ ...initState, data: initData });
	}, []);

	return [pagination, setPagination];
}
