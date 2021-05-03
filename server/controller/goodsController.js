const { readFile } = require('fs').promises
const path = require('path')

const readingFile = (file) => {
  return readFile(path.join(__dirname, `..${file}`), { encoding: 'utf8' })
}

exports.getGoods = async (_req, res) => {
  try {
    const dataOfGoods = await readingFile(`/goods/goods.json`)
    const ParsedDataOfGoods = JSON.parse(dataOfGoods)
    res.send(ParsedDataOfGoods)
  } catch (err) {
    throw new Error(`GET request to /api/v1/data failed: ${err}`)
  }
}
