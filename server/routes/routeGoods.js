import express from 'express'

import goodsController from '../controller/goodsController'

const router = express.Router()

router.route('/').get(goodsController.getGoods)

module.exports = router
