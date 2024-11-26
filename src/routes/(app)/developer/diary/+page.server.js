import { selectDiaryPage } from '$lib/db'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const posts = await selectDiaryPage(event)
    return { posts }
}