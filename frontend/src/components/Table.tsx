import { useMemo, useState } from "react";
import { useTable } from "react-table";
import { getIssue } from "../feature/getIssue";
import Button from "./Button";

interface TableType {
	data: Array[Object];
	columns: Array[Object];
}

export default function Table(props: TableType): JSX.Element {
	const data = useMemo(() => props.data, [props.data]);
	const [issue, setIssue] = useState<Object>({});
	const columns = useMemo(() => props.columns, []);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});
	return (
		<div className="table-Container">
			<div className="table">
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>{column.render("Header")}</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
