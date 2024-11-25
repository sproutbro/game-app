import { redirect } from "@sveltejs/kit";
import { handleCallback } from "$lib/auth/login";

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    await handleCallback(event)
    return redirect(302, "/auth/login");
}