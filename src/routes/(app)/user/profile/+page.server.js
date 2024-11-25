import { getUser } from "$lib/auth";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    return await getUser(event)
}