import axios from 'axios'

exports.getRates = async (_req, res) => {
  try {
    const url = 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD,RUB'
    const {
      data: { rates }
    } = await axios(url)
    res.json(rates)
  } catch (err) {
    throw new Error(`GET request to /api/v1/rates failed: ${err}`)
  }
}
