import { Request, Response } from 'express'
const { getStoreSchema } = require('../schemas/storeSchema')
const GenerateProducts = require('../service/generateStore')

async function getStoreController(req: Request, res: Response) {
    try {
        let query = getStoreSchema.parse(req.query)

        let foo = GenerateProducts(query)

        res.status(200).send({
            products: foo,
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getStoreController
