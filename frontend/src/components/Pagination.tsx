import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export interface PaginationType {
	pagination: Object;
	setPagination: Function;
}

export default function Pagination(props: PaginationType): JSX.Element {
	const { pagination, setPagination } = props;

	// shift page
	const handlePageClick = (event) => {
		const offset = event.selected * pagination.numberPerPage;
		setPagination({ ...pagination, offset });
	};
	useEffect(() => {
		setPagination((prevState) => {
			return {
				...prevState,
				pageCount: Math.ceil(prevState.data.length / prevState.numberPerPage),
				currentData: prevState?.data?.slice(
					pagination.offset,
					pagination.offset + pagination.numberPerPage
				),
				selected: Math.floor(pagination.offset / pagination.numberPerPage),
			};
		});
	}, [pagination.numberPerPage, pagination.offset, pagination.data, pagination.forceRerender]);


	return (
		<ReactPaginate
			previousLabel={"<<"}
			nextLabel={">>"}
			breakLabel={"..."}
			pageCount={pagination.pageCount}
			forcePage={pagination.selected}
			marginPagesDisplayed={1}
			pageRangeDisplayed={2}
			onPageChange={handlePageClick}
			containerClassName={"pagination"}
			activeClassName={"pagination__link--active"}
			disabledClassName={"pagination__link--disabled"}
		/>
	);
}
