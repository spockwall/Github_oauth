import useAuth from "../hooks/useAuth";
import { loginWithGithub } from "../feature/basicInfo/login";
import Button from "../components/Button";

export default function Login(): JSX.Element {
	const { auth, userData } = useAuth();
	return (
		<>
			<Button onClick={loginWithGithub}>login Github</Button>
		</>
	);
}
