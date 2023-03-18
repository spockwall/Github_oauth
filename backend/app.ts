const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
// const fetch = require("node-fetch")
require("dotenv").config();

// const fetch = (...args: any[]) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
console.log(CLIENT_SECRET);
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

app.use(bodyParser.json());
// app.get("/", (req: any, res: any) => {
// 	res.send("The server is working!");
// });

app.get("/getAccessToken", async (req: any, res: any) => {
	const code = req.query.code;
	console.log(code);

	const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + code;
	fetch("https://github.com/login/oauth/access_token" + params, {
		method: "POST",
		headers: {
			Accept: "application/json", // be careful on the quatotaion
		},
	})
		.then((response) => {
			console;
			return response.json();
		})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

app.get("/getUserData", (req: any, res: any) => {
	const accessToken = req.get("Authorization"); // Bearer Accesstoken
	console.log(accessToken);
	fetch("https://api.github.com/user", {
		method: "GET",
		headers: {
			"Authorization": accessToken, // Bearer Accesstoken
		},
	})
		.then(async (response) => {
			return response.json();
		})
		.then((data) => {
			res.json(data);
		});
});

app.listen(3000, () => {
	console.log(`server is listening on post 3000 !!!`);
});
