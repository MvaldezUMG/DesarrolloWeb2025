import express from 'express'
import EventEmitter from 'node:events'


const app = express()
const port = 3020

let mensajes = []
const sseEventEmitter = new EventEmitter()

//Habilitamos archivos estaticos
app.use(express.static('public'))

//Habilitar el uso de json
app.use(express.json())

// app.get('/', (req, res) => {
//     let queryString = req.query
//     res.send('Hello World con Express')
// })

app.post('/api/mensaje', (req, res)=> {
    const id = Math.random(50000, 60000) * 10000
    let nuevoMensaje = req.body
    nuevoMensaje.id = id
    mensajes.push(nuevoMensaje)

    sseEventEmitter.emit("nuevoMensaje", {data: nuevoMensaje})

    res.status(201).send({id: id})
})

app.get('/sse/mensajes', (req, res)=> {
    res.setHeader("Content-Type", "text/event-stream")
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Connection", "keep-alive")

    res.write('data: Connected to server\n\n')

    sseEventEmitter.on("nuevoMensaje", (event)=>{
        if (event.data){
            res.write(`data: ${JSON.stringify(event.data)}\n\n`)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
