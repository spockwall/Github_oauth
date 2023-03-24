import { useRef } from "react";
import Button from "./Button";

interface SearchBarType {
	searchBy: any; // actually is a ref
	pagination: Object;
	setPagination: Function;
}

export default function SearchBar(props: SearchBarType): JSX.Element {
	const { searchBy, pagination, setPagination } = props;
	const searchText = useRef("");
	const compare = (val1, val2): Boolean => {
		return val1?.toString().toLowerCase().includes(val2?.toString().toLowerCase());
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (searchText.current.value) {
					let data: Array[Object] = pagination.data;
					data = data.filter((obj) => {
						return compare(obj[searchBy.current.value], searchText.current.value);
					});
					setPagination({ ...pagination, data });
				} else {
					window.location.reload();
				}
			}}
		>
			<div className="search-bar">
				<input type="text" ref={searchText} placeholder="search..." />
				<button type="submit">submit</button>
			</div>
		</form>
	);
}
