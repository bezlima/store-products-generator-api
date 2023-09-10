const { LoremIpsum } = require('lorem-ipsum')

function generateLoremIpsum() {
    const lorem = new LoremIpsum()
    const numberOfSentences = Math.floor(Math.random() * 5)

    const generatedLorem = lorem.generateSentences(numberOfSentences)

    return generatedLorem
}

module.exports = generateLoremIpsum
