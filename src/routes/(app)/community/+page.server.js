import { selectCommunityPage } from '$lib/db/community'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const posts = await selectCommunityPage(event)
    return { posts }
}