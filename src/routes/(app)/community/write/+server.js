import { insertCommunity } from '$lib/db/community';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const result = await insertCommunity(event)
    if (result) return json({ message: "Success" })
}