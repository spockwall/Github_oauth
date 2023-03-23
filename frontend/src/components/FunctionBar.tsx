export interface FunctionBarType {
	buttons: Array[JSX.Element];
}

export default function FunctionBar(props: FunctionBarType): JSX.Element {
	return (
		<div className="button-container">
			{props.buttons.map((btn) => {
				return btn;
			})}
		</div>
	);
}
