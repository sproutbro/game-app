import { decryptUser } from "$lib/auth/handler"
import { query } from "."

export const selectCommunityPage = async (event) => {
    const page = event.url.searchParams.get("page") || 0
    const result = await query(selectCommunityQuery, [page * 10])
    return result.rows
}

export const insertCommunity = async (event) => {
    const userID = decryptUser(event)
    const formData = await event.request.json();
    const values = Object.values(formData);
    const result = await query(insertCommunityQuery, [userID, ...values]);
    return result.rowCount
}

const selectCommunityQuery = `
    SELECT
        c.id AS id,
        c.title AS title,
        c.description AS description,
        TO_CHAR(c.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        community c
        JOIN users u ON c.users_id = u.id
    ORDER BY
        id DESC
    LIMIT
        10
    OFFSET
        $1;
`

const insertCommunityQuery = `
    INSERT INTO
        community (users_id, title, description)
    VALUES
        ($1, $2, $3);
`