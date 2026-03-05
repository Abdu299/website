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
    const isBuyer = body.requestType === "buyer";

    let message;

if (isBuyer) {

message = `
🟢 طلب شراء عقار جديد

👤 الاسم: ${body.name}
📞 الهاتف: ${body.phone}
📧 البريد: ${body.email}

📍 المنطقة المطلوبة: ${body.city}
📍  الدوله:   ${body.country}

💰 الميزانية: ${body.budget}
النوع:  ${body.type}

📝 ملاحظات:
${body.notes}
`;

} else {

message = `
🏠 عرض عقار للبيع

👤 الاسم: ${body.name}
📞 الهاتف: ${body.phone}
📧 البريد: ${body.email}

📍 المدينة: ${body.city}
📍 العنوان: ${body.address}
📍  الدوله:   ${body.country}

🏢 نوع العقار: ${body.type}
🛏 عدد الغرف: ${body.rooms}
🏗 الحالة: ${body.condition}

💰 السعر المتوقع: ${body.price}

📝 ملاحظات:
${body.notes}
`;

}

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