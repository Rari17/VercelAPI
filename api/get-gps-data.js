import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const response = await fetch('http://[Raspberry_PI_IP]:[Port]/api/get-latest-gps', {
                method: 'GET',
            });
            const gpsData = await response.json();
            
            res.status(200).json(gpsData);
        } catch (error) {
            console.error('Error fetching GPS data:', error);
            res.status(500).json({ error: 'Failed to retrieve GPS data' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
