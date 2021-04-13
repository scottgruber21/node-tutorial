const http = require('http')
const nodemon = require('nodemon')
console.log(nodemon)

const server = http.createServer((req, res) => {
 if(req.url === '/'){
  res.end('welcome to our homepage')
 }
 if(req.url === '/about'){
  res.end('here is our short history')
 }
 res.end(`<h1>Not found</h1>
 <a href="/">Home</a>`)
})

server.listen(3000)

//https://youtu.be/TNV0_7QRDwY?t=6872