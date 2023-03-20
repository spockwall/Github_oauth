import { useMemo, useState } from "react";
import { useTable } from "react-table";
import { getIssue } from "../feature/getIssues";
import Button from "./Button";

interface TableType {
	data: Array[Object];
}

export default function Table(props: TableType): JSX.Element {
	const data = useMemo(() => props.data, [props.data]);
	const [issue, setIssue] = useState<Object>({});
	const columns = useMemo(
		() => [
			{ Header: "Repository", accessor: "name" },
			{ Header: "Issues", accessor: "open_issues" },
			{
				Header: "Access",
				accessor: "full_name",
				Cell: ({ cell }) => (
					<Button
						onClick={async () => {
							console.log(cell.row.original.issues_url);
							const issue = await getIssue(cell.row.original.issues_url);
							console.log(issue);
						}}
					>
						here
					</Button>
				),
			},
		],
		[]
	);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});
	return (
		<div className="Table-Container">
			<div className="Table">
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
