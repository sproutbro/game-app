import { decrypt } from "$lib/utils"
import { query, SQL } from "$lib/db";
import { redirect } from "@sveltejs/kit";

export const getUser = async (event) => {
    const userID = decryptUser(event)
    const result = await query(SQL.selectUser, [userID])
    return result.rows[0]
}

export const updateUser = async (event) => {
    const userID = decryptUser(event)
    const userData = await event.request.json();
    const values = Object.values(userData);
    const result = await query(SQL.updateUser, [...values, userID])
    return result.rowCount
}

const decryptUser = (event) => {
    const encrypteduserID = event.cookies.get("user")
    if (encrypteduserID) return decrypt(encrypteduserID)
    redirect(302, "/auth/login")
}