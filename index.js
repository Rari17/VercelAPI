export default function handler(req, res) {
  res.status(200).send("Welcome to the Vercel GPS API! Use /api/receive-gps-data to POST data or /api/get-gps-data to retrieve data.");
}
