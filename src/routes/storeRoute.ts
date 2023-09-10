import { Router } from 'express'
const getStoreController = require('../controller/storeController')
const StoreRoute = Router()

StoreRoute.route('/api/store/options').get(getStoreController)

module.exports = StoreRoute
