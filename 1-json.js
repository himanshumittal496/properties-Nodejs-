const fs = require('fs')
// const book = {
// title: 'ego is the enemy',
// author: 'ryan holiday'   
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json' , bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)