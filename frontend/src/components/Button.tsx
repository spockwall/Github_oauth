export interface BtnType {
	children: any;
	onClick?: any;
	className?: string;
	type?: string;
}

export default function Button(props: BtnType): JSX.Element {
	const className = props.className ?? "btn-blue";
	const type = props.type ?? "button";
	return (
		<button onClick={props.onClick} className={className}>
			{props.children}
		</button>
	);
}
