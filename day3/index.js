import { readFileSync } from 'fs'

const rawData = readFileSync('./data.txt', { encoding: 'utf-8'})
const rucksacks = rawData.split('\n')

// Exercise 1
const base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let count = 0
rucksacks.map((rucksack) => {
    const item1 = rucksack.substring(0, rucksack.length / 2)
    const item2 = rucksack.substring(rucksack.length / 2)
    for (let i = 0; i < item1.length; i++) {
        const letter = item1[i]
        if(item2.includes(letter)) {
            const index = base.indexOf(letter) + 1
            count += index
            return 
        }
    }
})
console.log(count)

// Exercise 2
let count2 = 0
for (let i = 0; i < rucksacks.length; i += 3) {
    const rucksack1 = rucksacks[i]
    const rucksack2= rucksacks[i + 1]
    const rucksack3 = rucksacks[i + 2]
    for (let j = 0; j < rucksack1.length; j++) {
        const letter = rucksack1[j]
        if(rucksack2.includes(letter) && rucksack3.includes(letter)) {
            const index = base.indexOf(letter) + 1
            count2 += index
            break
        }
    }
}
console.log(count2)