const imageOpts: { [key: number]: string } = {
    0: 'https://placehold.jp/300x300.png',
    1: 'https://placehold.jp/600x300.png',
    2: 'https://placehold.jp/300x600.png',
    3: 'https://placehold.jp/600x600.png',
    4: 'https://placehold.jp/500x600.png',
}

function randomImage() {
    let randomNumber = Math.floor(Math.random() * 5)

    return imageOpts[randomNumber]
}

module.exports = randomImage
