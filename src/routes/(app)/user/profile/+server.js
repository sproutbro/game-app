import { updateUser } from '$lib/auth/handler';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const result = updateUser(event)
    if (result) return json({ message: "Success" })
}