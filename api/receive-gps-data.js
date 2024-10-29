
let latestGpsData = null; // Speichert die neuesten GPS-Daten

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const gpsData = req.body;

        // GPS-Daten speichern
        latestGpsData = gpsData;

        console.log('GPS-Daten empfangen:', latestGpsData);
        res.status(200).json({ message: 'GPS data received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
