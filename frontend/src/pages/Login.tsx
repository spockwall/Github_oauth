import useAuth from "../hooks/useAuth";
import { loginWithGithub } from "../feature/basicInfo/login";
import Button from "../components/Button";
import FunctionBar from "../components/FunctionBar";

export default function Login(): JSX.Element {
	const { auth, userData } = useAuth();
	const buttons = [
		<Button onClick={loginWithGithub} key="login">
			login Github
		</Button>,
	];
	return (
		<>
			<FunctionBar buttons={buttons}></FunctionBar>
		</>
	);
}
