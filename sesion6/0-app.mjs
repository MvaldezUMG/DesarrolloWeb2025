import fs from "node:fs"
import os from "node:os"

//forma sincrona
//forma asincrona
fs.readFile("texto.txt", {
    'encoding': 'utf-8'
},(err, data)=> {
    if (err){
        console.error(err)
        return
    }
    console.log(data)
})

let datos = fs.readFileSync("texto.txt", 'utf-8')

fs.writeFileSync("texto.txt", "este lo cambio desde el codigo")

const finalizoDeEscribirCallback = (err)=>{
        if (err){
            console.error(err)
        }
        console.log("He terminado de escribir de forma asincrona")
    }

fs.writeFile("texto.txt", "esto lo escribi de forma asincrona", {"encoding": 'utf-8'},
    finalizoDeEscribirCallback
)


console.log(datos);

//Architectura 
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.platform());
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
)