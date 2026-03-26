export default function handler(req, res) {
  const { price } = req.body || {};

  let prediction = 0;

  if (price && price > 1000) {
    prediction = 1;
  }

  res.status(200).json({ prediction });
}
