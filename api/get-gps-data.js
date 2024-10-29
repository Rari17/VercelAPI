export default async function handler(req, res) {
    if (latestGpsData) {
        res.status(200).json(latestGpsData);
    } else {
        res.status(404).json({ message: 'No GPS data available' });
    }
}
