import { logoutWithGithub } from "../feature/basicInfo/logWithGithub";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

export default function Home(): JSX.Element {
	const { auth, userData } = useAuth();
	return (
		<>
			<div>Hello {userData?.login}</div>
			<Button onClick={logoutWithGithub}>logout github</Button>
		</>
	);
}
