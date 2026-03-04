export default async function handler(req, res) {

  try {

    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const data = req.body || {};

    const message = `
New property submission

Name: ${data.name || "N/A"}
Phone: ${data.phone || "N/A"}
Address: ${data.address || "N/A"}
Rooms: ${data.rooms || "N/A"}
Type: ${data.type || "N/A"}
Notes: ${data.notes || "N/A"}
`;

    const telegram = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      }
    );

    const result = await telegram.json();

    return res.status(200).json(result);

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Telegram send failed"
    });

  }

}