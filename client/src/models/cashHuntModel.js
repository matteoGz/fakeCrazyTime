let randomBonus = Math.floor(Math.random() * 31) + 10;

const row1 = [
    Math.floor(Math.random() * 31) + 10,
    Math.floor(Math.random() * 31) + 10,
    randomBonus,
    Math.floor(Math.random() * 31) + 10
]

const row2 = [
    Math.floor(Math.random() * 31) + 10,
    Math.floor(Math.random() * 31) + 10,
    Math.floor(Math.random() * 31) + 10,
    randomBonus
]

const row3 = [
    randomBonus,
    Math.floor(Math.random() * 31) + 10,
    Math.floor(Math.random() * 31) + 10,
    Math.floor(Math.random() * 31) + 10
]

const row4 = [
    Math.floor(Math.random() * 31) + 10,
    randomBonus,
    Math.floor(Math.random() * 31) + 10,
    Math.floor(Math.random() * 31) + 10
]

export const cashHuntModel = {
    row1,
    row2,
    row3,
    row4
}