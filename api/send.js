export default async function handler(req, res) {

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID

  const data = req.body

  const message = `
New property submission

Name: ${data.name}
Phone: ${data.phone}
Address: ${data.address}
Notes: ${data.notes}
`

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })

  res.status(200).json({ success: true })
}