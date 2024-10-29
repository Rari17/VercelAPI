// receive-gps-data.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log("Received GPS data:", data); // This will log the incoming data in Vercel's logs

    // Process data here or save it to a database if needed

    res.status(200).json({ message: "GPS data received", data: data });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
