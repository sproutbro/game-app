import { selectDiaryDetail } from '$lib/db'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const post = await selectDiaryDetail(event)
    return { post }
}