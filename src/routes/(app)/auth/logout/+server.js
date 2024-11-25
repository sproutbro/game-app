import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET(event) {
    event.cookies.delete("user", { path: "/" });
    return redirect(302, "/");
}