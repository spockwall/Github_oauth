import useAuth from "../hooks/useAuth";
import { encryptToken } from "../feature/AES";
import { loginWithGithub } from "../feature/basicInfo/login";
import Button from "../components/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../feature/validateToken";

const cookieConfig = "path=/ " + "httpOnly=true " + "sameSite=true";

export default function Login(): JSX.Element {
	const { auth, userData } = useAuth();
	const personlToken = useRef("");
	const navigate = useNavigate();

	return (
		<div className="login-container">
			<div className="token-input-container">
				<label>github personal token</label>
				<input type="text" ref={personlToken} />
			</div>
			<Button
				onClick={async (e) => {
					e.preventDefault();
					const valid: Boolean = await validateToken(personlToken.current.value);
					if (valid) {
						const encrptToken = encryptToken(personlToken.current.value);
						document.cookie = `personalAccessToken=${encrptToken} ` + cookieConfig;
						loginWithGithub();
					} else {
						window.alert("INVALID TOKEN");
						navigate("/login");
					}
				}}
			>
				login Github
			</Button>
		</div>
	);
}
