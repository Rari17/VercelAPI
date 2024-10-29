let lastReceivedData = null;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    lastReceivedData = data; // Store the latest GPS data
    console.log("Received GPS data:", data);
    res.status(200).json({ message: "GPS data received", data });
  } else if (req.method === 'GET') {
    if (lastReceivedData) {
      res.status(200).json({ message: "Latest GPS data", data: lastReceivedData });
    } else {
      res.status(404).json({ message: "No GPS data available" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
