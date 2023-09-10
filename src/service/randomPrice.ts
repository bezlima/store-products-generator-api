function generateRandomPrice() {
    const min = 10.0
    const max = 100.0

    const value = Math.random() * (max - min) + min

    return `R$ ${value.toFixed(2).replace('.', ',')}`
}

module.exports = generateRandomPrice
