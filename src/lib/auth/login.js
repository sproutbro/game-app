import { encrypt, tryFetch } from "$lib/utils";
import kakao from "./kakao.js";
import { query, SQL } from "$lib/db";

const providers = { kakao }

export const createAuthorizationUrl = (event) => {
    // set function
    const { baseAuthorizationUrl } = providers[event.params.slug]

    // check baseAuthorizationUrl
    if (!baseAuthorizationUrl) return "/auth/login";

    const state = Math.random().toString();
    event.cookies.set("state", state, { path: "/" });

    return baseAuthorizationUrl + "&state=" + state;
}

export const handleCallback = async (event) => {
    // check state
    const param_state = event.url.searchParams.get("state");
    const cookie_state = event.cookies.get('state');
    if (param_state !== cookie_state) return;

    // set function 
    const { createTokenUrl, createUserUrl, getNickname } = providers[event.params.slug]

    // get token
    const code = event.url.searchParams.get("code");
    const tokenUrl = createTokenUrl(code)
    const token = await tryFetch(tokenUrl.url, tokenUrl.option)

    // get userInfo
    const userUrl = createUserUrl(token.access_token)
    const userInfo = await tryFetch(userUrl.url, userUrl.option)

    // set user cookie
    const userId = event.params.slug + userInfo.id
    const cookieOption = { path: "/", expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) }
    event.cookies.set("user", encrypt(userId), cookieOption);

    // check new user
    const result = await query(SQL.selectUser, [userId])
    if (result.rows[0]) return;

    // insert new user
    const nickname = getNickname(userInfo)
    await query(SQL.insertUser, [userId, nickname])
}

