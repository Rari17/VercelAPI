import { Client } from 'pg';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { data } = req.body;

        // Verwende die passende Umgebungsvariable
        const client = new Client({
            connectionString: process.env.POSTGRES_URL,  // Hier den richtigen Identifier verwenden
            ssl: { rejectUnauthorized: false }
        });
        
        await client.connect();

        const queryText = `
            INSERT INTO cow_location_data (id, cow_id, latitude, longitude, altitude, date, time)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        const values = [
            data.id, data.cow_id, data.latitude, data.longitude, 
            data.altitude, data.date, data.time
        ];

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
