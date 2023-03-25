import { AES, enc } from "crypto-js";

export const decryptTokenFromCookie = (cookieName: string) => {
	const encryptedToken = document.cookie
		.split("; ")
		.find((row) => row.startsWith(cookieName + "="))
		?.split("=")[1];

	const decryptedToken = AES.decrypt(encryptedToken, "123").toString(enc.Utf8);
	return decryptedToken || "";
};

export const encryptToken = (token: string) => {
	const encryptToken = AES.encrypt(token, "123");
	return encryptToken.toString();
};
