import { readFileSync } from 'fs'

const rawData = readFileSync('./data.txt', { encoding: 'utf-8'})
const moves = rawData.split('\n')
const movesData = moves.map(move => {
    const words = move.split(' ')
    return { nbToMove: Number(words[1]), from: Number(words[3]), to: Number(words[5]) }
})
const stacks = [
  ['F', 'H', 'B', 'V', 'R', 'Q', 'D', 'P'],
  ['L', 'D', 'Z', 'Q', 'W', 'V'],
  ['H', 'L', 'Z', 'Q', 'G', 'R', 'P', 'C'],
  ['R', 'D', 'H', 'F', 'J', 'V', 'B'],
  ['Z', 'W', 'L', 'C'],
  ['J', 'R', 'P', 'N', 'T', 'G', 'V', 'M'],
  ['J', 'R', 'L', 'V', 'M', 'B', 'S'],
  ['D', 'P', 'J'],
  ['D', 'C', 'N', 'W', 'V']
]

// Exercise 1
for (let j = 0; j < movesData.length; j++) {
    const { nbToMove, from, to } = movesData[j]
    for (let i = 0; i < nbToMove; i++) {
        const crate = stacks[from - 1].pop()
        stacks[to - 1].push(crate)
    }
}
const lastCrates = stacks.map(stack => {
    return stack[stack.length - 1]
})
const string = lastCrates.join('')
console.log(string)
// Exercise 2
const stacks2 = [
  ['F', 'H', 'B', 'V', 'R', 'Q', 'D', 'P'],
  ['L', 'D', 'Z', 'Q', 'W', 'V'],
  ['H', 'L', 'Z', 'Q', 'G', 'R', 'P', 'C'],
  ['R', 'D', 'H', 'F', 'J', 'V', 'B'],
  ['Z', 'W', 'L', 'C'],
  ['J', 'R', 'P', 'N', 'T', 'G', 'V', 'M'],
  ['J', 'R', 'L', 'V', 'M', 'B', 'S'],
  ['D', 'P', 'J'],
  ['D', 'C', 'N', 'W', 'V']
]
for (let j = 0; j < movesData.length; j++) {
    const { nbToMove, from, to } = movesData[j]
    const cratesToMove = stacks2[from - 1].splice(stacks2[from - 1].length - nbToMove, nbToMove)
    for (let i = 0; i < cratesToMove.length; i++) {
        const crate = cratesToMove[i]
        stacks2[to - 1].push(crate)
    }
}
const lastCrates2 = stacks2.map(stack => {
    return stack[stack.length - 1]
})
const string2 = lastCrates2.join('')
console.log(string2)