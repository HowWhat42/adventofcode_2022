import { readFileSync } from 'fs'

const rawData = readFileSync('./data.txt', { encoding: 'utf-8'})

// Exercise 1
let markerLength = 4
for (let i = 0; i < rawData.length - markerLength; i++) {
    const marker = rawData.substring(i, i + markerLength) 
    let count = 0
    for (let j = 0; j < marker.length; j++) {
        const letter = marker[j]
        const markerArray = marker.split('')
        const found = markerArray.filter(l => l === letter)
        if (found.length > 1) {
            count++
        }
    }
    if(count < 1) {
        console.log(i + markerLength)
        break
    }
}
// Exercise 2
markerLength = 14
for (let i = 0; i < rawData.length - markerLength; i++) {
    const marker = rawData.substring(i, i + markerLength) 
    let count = 0
    for (let j = 0; j < marker.length; j++) {
        const letter = marker[j]
        const markerArray = marker.split('')
        const found = markerArray.filter(l => l === letter)
        if (found.length > 1) {
            count++
        }
    }
    if(count < 1) {
        console.log(i + markerLength)
        break
    }
}