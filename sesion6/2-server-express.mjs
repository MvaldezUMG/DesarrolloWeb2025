import express from 'express'
import EventEmitter from 'node:events'


const app = express()
const port = 3020

const myEmitter = new EventEmitter()

app.get('/', (req, res) => {
    let queryString = req.query
    myEmitter.emit('alguien_uso_el_endpoint', {data: queryString})
    res.send('Hello World con Express')
})

myEmitter.on('alguien_uso_el_endpoint', (datos)=>{
    console.log("Alguien uso el endpoint /", datos)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
