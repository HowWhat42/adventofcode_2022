import { readFileSync } from 'fs'

// Exercise 1
const rawData = readFileSync('./data.txt', { encoding: 'utf-8'})
const rounds = rawData.split('\n')
let score = 0

rounds.map((round) => {
    const player = round.split(' ')[0]
    const me = round.split(' ')[1]
    switch (me) {
        case 'X':
            score += 1
            break
        case 'Y':
            score += 2
            break
        case 'Z':
            score += 3
    }
    if((me === 'X' && player === 'C') || (me === 'Y' && player === 'A') || (me === 'Z' && player === 'B')) {
        score += 6
    } else if ((me === 'X' && player === 'A') || (me === 'Y' && player === 'B') || (me === 'Z' && player === 'C')) {
        score += 3
    }
})
console.log(score)

// Exercise 2
let score2 = 0

rounds.map((round) => {
    const player = round.split(' ')[0]
    const state = round.split(' ')[1]
    switch (state) {
        case 'X':
            switch (player) {
                case 'A': // Me C
                    score2 += 3
                    break
                case 'B': // Me A
                    score2 += 1
                    break
                case 'C': // Me B
                    score2 += 2
            }
            break
        case 'Y':
            switch (player) {
                case 'A': // Me A
                    score2 += 1
                    break
                case 'B': // Me B
                    score2 += 2
                    break
                case 'C': // Me C
                    score2 += 3
            }
            score2 += 3
            break
        case 'Z':
            switch (player) {
                case 'A': // Me B
                    score2 += 2
                    break
                case 'B': // Me C
                    score2 += 3
                    break
                case 'C': // Me A
                    score2 += 1
            }
            score2 += 6
            break
    }
})
console.log(score2)