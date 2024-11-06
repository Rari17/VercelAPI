
import { Client } from 'pg'; // PostgreSQL-Client für Node.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { data } = req.body; // Angenommen, deine Daten kommen im Feld `data`
        const client = new Client({
            connectionString: process.env.VERCEL_DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();

        const queryText = 'INSERT INTO cow_location_data (latitude, longitude, date, time) VALUES($1, $2, $3, $4)';
        const values = [data.latitude, data.longitude, data.date, data.time];

        try {
            await client.query(queryText, values);
            res.status(200).json({ message: "Data inserted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error inserting data" });
        } finally {
            await client.end();
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
