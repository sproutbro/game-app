import 'dotenv/config';
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    max: 5,
});

const query = async (text, params) => {
    try {
        return await pool.query(text, params);
    } catch (error) {
        console.error(error)
    }
};

export { query }