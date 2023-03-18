export interface BtnType {
	children: any;
	onClick?: any;
}

export default function Button(props: BtnType): JSX.Element {
	return <button onClick={props.onClick}>{props.children}</button>;
}
