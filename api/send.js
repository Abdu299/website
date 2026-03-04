export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    const body = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const message = `
🏠 New property submission

👤 Name: ${body.name}
📞 Phone: ${body.phone}
📧 Email: ${body.email}

📍 City: ${body.city}
📍 Address: ${body.address}

🏢 Property type: ${body.type}
📐 Area: ${body.area} m²
🛏 Rooms: ${body.rooms}
🏗 Condition: ${body.condition}

📅 Year built: ${body.year}
💰 Expected price: ${body.price}

📝 Description:
${body.description}

📌 Notes:
${body.notes}
`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Telegram send failed"
    });

  }

}