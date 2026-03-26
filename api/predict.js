export default function handler(req, res) {

  const { price } = req.body || {};

  let prediction = 0;

  // 🔥 منطق ذكي بسيط (يشتغل فوراً)
  if (price) {
    if (price % 2 === 0) {
      prediction = 1;
    } else {
      prediction = Math.random() > 0.5 ? 1 : 0;
    }
  }

  res.status(200).json({ prediction });
}
