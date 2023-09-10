interface IQuery {
    amount: string
    images: string
    description: string
    name: string
    price: string
    rating: string
}

function queryFormate(query: IQuery) {
    const outPutQuery = {
        amount: Number(query.amount),
        images: JSON.parse(query.images),
        description: JSON.parse(query.description),
        name: JSON.parse(query.name),
        price: JSON.parse(query.price),
        rating: JSON.parse(query.rating),
    }
    return outPutQuery
}

module.exports = queryFormate
