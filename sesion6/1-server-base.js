const http = require('node:http')
const fs = require("node:fs")
//const portSelected = process.argv[1]

const hostname = "127.0.0.1"
const port = 3010

const server = http.createServer((req, res)=>{

    if (req.method === 'GET' && req.url === "/"){
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Hello World\n")
    }
    else if (req.method === "GET" && req.url === "/archivo"){
        fs.readFile("texto.txt", {"encoding": "utf-8"}, (err, data)=>{
            if (err){
                res.statusCode = 500
                res.setHeader("Content-Type", "text/plain")
                res.end("Error interno del servidor\n")
                return
            }
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            res.end(data)
        })
    }
    else {
        res.statusCode = 405
        res.setHeader("Content-Type", "text/plain")
        res.end("Metodo no permitido\n")
    }
})

const server2 = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World desde server 2\n")
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
} )

server2.listen(3011, hostname, ()=>{
    console.log(`Server2 running at http://${hostname}:3011`)
})