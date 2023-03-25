import { oauthConfig } from "../../oauth.config";

export const validateToken = (personlAccessToken: string): Boolean => {
    return fetch(oauthConfig.issuePath, {
        method: "GET",
        headers: new Headers({
            Authorization: "token " + personlAccessToken,
            Accept: "application/vnd.github+json",
        }),
    })
        .then((res) => {
            console.log(res.status);
            return res.status >= 200 && res.status < 300;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
};
