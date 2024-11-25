const selectUser = `
    SELECT
        *
    FROM
        users
    WHERE
        id = $1;
`

const insertUser = `
    INSERT INTO
        users
    VALUES
        ($1, $2);
`

const updateUser = `
    UPDATE 
        users
    SET 
        nickname = $1
    WHERE id= $2;
`

export default { selectUser, insertUser, updateUser }