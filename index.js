export default function handler(req, res) {
  res.status(200).send("Willkommen bei der Vercel GPS API! Verwende /api/receive-gps-data zum POSTen von Daten oder /api/get-gps-data zum Abrufen von Daten.");
}
