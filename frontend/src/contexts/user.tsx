import { createContext, useEffect, useState } from "react";

export interface userStateType {
	auth: Boolean;
	setAuth: Function;
	userData: Object;
	setUserData: Function;
}
const UserContext = createContext<userStateType>();

export const UserContextProvider = ({ children }: { children: JSX.Element[] | null }) => {
	const [userData, setUserData] = useState<Object>(null);
	const [auth, setAuth] = useState<Boolean>(false);
	useEffect(() => {
		const token = localStorage.getItem("githubAccessToken");
		const data = localStorage.getItem("githubUserData");
		if (token) {
			setAuth(true);
			setUserData(JSON.parse(data));
		}
	}, []);
	return (
		<UserContext.Provider
			value={{
				auth,
				setAuth,
				userData,
				setUserData,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
