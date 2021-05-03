import axios from 'axios'

exports.getRates = async (_req, res) => {
  try {
    const url = 'https://api.ratesapi.io/api/latest?base=USD&symbols=EUR,CAD,RUB,USD'
    const {
      data: { rates }
    } = await axios(url)
    res.json(rates)
  } catch (err) {
    throw new Error(`GET request to /api/v1/rates failed: ${err}`)
  }
}
