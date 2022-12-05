import { readFileSync } from 'fs'

const rawData = readFileSync('./data.txt', { encoding: 'utf-8'})
const sections = rawData.split('\n')
const pairs = sections.map((section) => section.split(','))

// Exercise 1
let count = 0
for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]
    
    const key1 = Number(pair[0].split('-')[0])
    const key2 = Number(pair[0].split('-')[1])
    const key3 = Number(pair[1].split('-')[0])
    const key4 = Number(pair[1].split('-')[1])
    console.log(pair)

    if((key1 <= key3 && key2 >= key4) || (key3 <= key1 && key4 >= key2)) {
        count++
    }
}

console.log(count)

// Exercise 2
let count2 = 0
for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]
    
    const key1 = Number(pair[0].split('-')[0])
    const key2 = Number(pair[0].split('-')[1])
    const key3 = Number(pair[1].split('-')[0])
    const key4 = Number(pair[1].split('-')[1])
    console.log(pair)

    if((key1 <= key4 && key2 >= key3) || (key3 <= key2 && key4 >= key2)) {
        count2++
    }
}

console.log(count2)