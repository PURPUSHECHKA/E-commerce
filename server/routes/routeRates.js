import express from 'express'

import ratesController from '../controller/ratesController'

const router = express.Router()

router.route('/').get(ratesController.getRates)

module.exports = router
