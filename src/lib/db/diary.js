import { query } from "."

export const selectDiaryPage = async (event) => {
    const page = event.url.searchParams.get("page") || 0
    const result = await query(selectDiaryPageQuery, [page * 10])
    return result.rows
}

// export const insertCommunity = async (event) => {
//     const userID = decryptUser(event)
//     const formData = await event.request.json();
//     const values = Object.values(formData);
//     const result = await query(insertCommunityQuery, [userID, ...values]);
//     return result.rows[0]
// }

export const selectDiaryDetail = async (event) => {
    const communityID = event.params.slug
    const result = await query(selectDiaryDetailQuery, [communityID])
    return result.rows[0]
}

const selectDiaryPageQuery = `
    SELECT
        id,
        title,
        description,
        TO_CHAR(created_at, 'YYYY-MM-DD') AS created_at
    FROM
        diary 
    ORDER BY
        id DESC
    LIMIT
        10
    OFFSET
        $1;
`

const selectDiaryDetailQuery = `
    SELECT
        id AS id,
        title AS title,
        description AS description,
        TO_CHAR(created_at, 'YYYY-MM-DD') AS created_at
    FROM
        diary
    WHERE id = $1;
`

const insertCommunityQuery = `
    INSERT INTO
        community (users_id, title, description)
    VALUES
        ($1, $2, $3)
    RETURNING id;
`