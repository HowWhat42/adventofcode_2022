import { readFileSync } from 'fs'

// Exercise 1
const rawData = readFileSync('./data.txt', { encoding: 'utf-8'})
const elves = rawData.split('\n\n')
const elvesCalories = elves.map(elf => {
    const calories = elf.split('\n')
    return calories.reduce((prev, current) => prev + Number(current), 0)
})

const max = (array) => {
    let max = array[0]
    let maxIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
            maxIndex = i
        }
    }
    return {max, maxIndex}
}

// Exercise 2
const first = max(elvesCalories)
elvesCalories.splice(first.maxIndex, 1)

const second = max(elvesCalories)
elvesCalories.splice(second.maxIndex, 1)

const third = max(elvesCalories)
elvesCalories.splice(third.maxIndex, 1)
console.log(first.max + second.max + third.max)