const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=d98886fc689c1c27bd60e77a005111c2&query=37.8267,-122.4233&units=m'

const request = http.request(url, (response) => {
         let data = ''
         response.on('data', (chunk) => {
             data = data + chunk.toString()
         })    
         response.on('end', () => {
             const body = JSON.parse(data)
             console.log(body)

         })
})
request.on('error', (error) => {
    console.log('an error', error)
})
request.end()