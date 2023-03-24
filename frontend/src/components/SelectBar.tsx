import { useRef } from "react";
import Button from "./Button";

interface SelectBarType {
	features: Array[string];
	selection: any;
}

export default function SelectBar(props: SelectBarType): JSX.Element {
	const { features, selection } = props;
	return (
		<div className="select-bar" ref={selection}>
			<select
				ref={selection}
				onChange={(e) => {
					selection.current.value = e.target.value;
				}}
			>
				<option disabled key="select" selected>
					search by
				</option>
				{features.map((val) => {
					return (
						<option value={val} key={val}>
							{val}
						</option>
					);
				})}
			</select>
		</div>
	);
}
