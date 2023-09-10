type typeProducts = {
    id: number
    img: string
    description: string
    name: string
    price: string
    rating: number
}

interface IQuery {
    amount: string
    images: string
    description: string
    name: string
    price: string
    rating: string
}

function GenerateProducts(query: IQuery) {
    const randomName = require('./randomName')
    const generateRandomPrice = require('./randomPrice')
    const randomRating = require('./randomRating')
    const generateLoremIpsum = require('./randomDescription')
    const queryFormate = require('./queryFormate')
    const randomImage = require('./randomImage')

    const outPutQuery = queryFormate(query)

    const products: typeProducts[] = []

    for (let i = 0; i < outPutQuery.amount; i++) {
        const product = {
            id: i,
            img: outPutQuery.images ? randomImage() : '',
            description: outPutQuery.description ? generateLoremIpsum() : '',
            name: outPutQuery.name ? randomName(i) : '',
            price: outPutQuery.price ? generateRandomPrice() : '',
            rating: outPutQuery.rating ? randomRating() : '',
        }

        products.push(product)
    }

    return products
}

module.exports = GenerateProducts
