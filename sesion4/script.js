//alert("Hola desde otro script")
// let script = document.createElement("SCRIPT")
// script.src = "dinamico.js"
// document.body.appendChild(script)

//Variables y constantes

//miFuncion(true)
//miFuncion(false)

function miFuncion(bandera) {
    if (bandera) {
        var num = 10
    } else {
        let num2 = 15
    }
    console.log(num)
    console.log(num2)
}

function bucles() {
    let miArreglo = [1, 3, 4, 5, 7, 8, "Hola", "1", false]

    miArreglo.forEach(elemento => {
        console.log(elemento)
    })
    miArreglo.forEach(function (elemento) {
        console.log(elemento)
    })
    let hacerPorCadaUno = function (elemento) {
        console.log(elemento)
    }
    miArreglo.forEach(hacerPorCadaUno)

    for (let i = 0; i < miArreglo.length; i++) {
        console.log(miArreglo[i])
    }
}

function objetos() {
    const nombre = "Juan"
    //nombre = "Pedro"
    console.log(nombre)
    const persona = {
        nombre: "Pedro",
        edad: 20,
        dpi: "210294930443",
        fechaDeInscripcion: new Date(2025, 10, 5),
        materias: ["Desa", "BD2"]
    }

    //Spread operator
    const juanito = {
        ...persona,
        nombre: "Juanito"
    }
    persona.nombre = "Jose"
    console.log(persona.nombre)
    console.log(persona.edad)
    console.log(juanito)

    //Deconstruccion de objetos
    const { nombre: nombrePersona, dpi } = persona;
    console.log(nombrePersona, dpi)

    //imprimirDatos(persona)

    //Deconstruccion de arreglos
    let arreglo2 = [1, 3]
    const [numero1, numero2] = arreglo2
}

function imprimirDatos({ nombre, dpi }) {
    console.log(nombre, dpi)
}


function arreglos() {
    const frutas = ["manzana", "pera", "durazno", "naranja"]
    // Filter devuelve un array
    let filtradas = frutas.filter(fruta => fruta.indexOf("manzana") > -1)
    console.log(filtradas.length > 0 ? filtradas[0] : "No encontrada")
    //find duevuelve solo el elemento encontrado
    let encontrada = frutas.find(f => f === "pera")
    console.log(encontrada)
    let condicion = 1 == '1'
    console.log(condicion)
    condicion = 1 === '1'
    console.log(condicion)

    let nuevo = frutas.map(fruta => fruta + " mas madura")
    console.log(nuevo)
}

function calcularHorasExtras() {
    costoPorHora = 100
    const empleados = [
        {
            nombre: "Jose",
            horas: 10
        },
        {
            nombre: "Jose",
            horas: 5
        }, {
            nombre: "Jose",
            horas: 40
        }
    ]
    const empleadosConHoras = empleados.map(empleado => (
        {
            ...empleado,
            totalAPagar: empleado.horas * costoPorHora
        }
    ))
    console.log(empleadosConHoras)
}
//objetos()
//calcularHorasExtras()
//arreglos()
//imprimirDatos()
//bucles()

//Callbacks 

function callback() {
    console.log("Estoy imprimiendo" + new Date().getMilliseconds())
}

//Se va ejecutar cada 3 segundos
// setInterval(callback, 3000)

// setInterval(() => {
//     console.log("Hola")
// }, 3000)

//Solo se ejecuta una vez
//setTimeout(callback, 2000)

//Metodo antiguo para peticiones http
function XMLHTTP() {
    // Peticiones XML Http Request
    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        // 4 == Completed 
        if (this.readyState == 4) {
            let parsed = JSON.parse(xhttp.responseText)
            console.log(parsed);
        }
    }
    //Enviamos la peticion
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos")
    xhttp.send()
}
XMLHTTP()

//Peticiones con formatos promises
function peticionesFetch() {
    let response = fetch("https://jsonplaceholder.typicode.com/todos")
    response.then((r) => {
        return r.json()//Convierte a objetos de javascript
    }).then(datos => {
        console.log(datos)
    }).catch(err => {
        console.error(err)
    })
}

async function peticionesAsyncFetch() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos")
        let datos = await response.json()
        console.log(datos)
    }
    catch (err) {
        console.error(err)
    }
}

//peticionesFetch()
//peticionesAsyncFetch()

function manipularDOM() {
    document.body.style.backgroundColor = "cyan"
    let miDiv = document.getElementById("miDiv")
    miDiv.innerText = "Hola desde JS"
    miDiv.style.fontSize = "20px"
    //Agregar elementos hijos con texto
    miDiv.innerHTML = "<table id='miTabla' border=1><tr><td>Hola</td></tr></table>"
    //Acceder al nuevo elemento
    let miTable = document.getElementById("miTabla")
    console.log(miTable)

    let miForm = document.getElementById("miForm")
    miForm.addEventListener("submit", (e) => {
        e.preventDefault()

        let resultadoValidacion = aplicarValidador()
        let formValues = new FormData(e.target)
        let nombre = formValues.get("nombre")
        console.log(resultadoValidacion)
    })
    //Crear elementos del DOM
    let nuevoElemento = document.createElement("a")
    nuevoElemento.id = "miNuevoEnlace"
    nuevoElemento.href = "/"
    nuevoElemento.innerText = "Mi enlace creado con JS"
    document.body.appendChild(nuevoElemento)

    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.appendChild(nuevoElemento)
    tr.appendChild(td)
    miTable.appendChild(tr)

}

function aplicarValidador() {
    let elementos = document.querySelectorAll("input[data-validation=required]")
    let resultados = []
    for (let i = 0; i < elementos.length; i++) {
        let value = elementos[i].value
        let validador = { nombre: "", valido: false }

        if (value !== "") {
            validador.nombre = elementos[i].name
            validador.valido = true
            elementos[i].style.backgroundColor = ""
        } else {

            elementos[i].style.backgroundColor = "red"
        }

        resultados.push(validador)
    }
    return resultados
}
aplicarValidador()
manipularDOM()

function windowObject() {
    console.log(window.location)

    //Local storage
    //Session storage

}
windowObject()

document.addEventListener("DOMContentLoaded", () => {
    let inputNombre = document.getElementById("nombre")
    inputNombre.value = localStorage.getItem("nombre")
})
window.addEventListener("beforeunload", (event) => {
    let inputNombre = document.getElementById("nombre")
    window.localStorage.setItem("nombre", inputNombre.value)
    //event.preventDefault()

})

function confirms() {
    let esCorrecto = confirm("Esta seguro que los datos son correctos ?")
    if (esCorrecto) {
        console.log("Es correcto")
    }
    else {
        console.error("No es correcto")
    }
}

function prompts() {
    let valor = prompt("Ingrese su nombre")
    console.log("el valor es" + valor)
}

function dialogPropio() {
    let dialog = document.getElementById("dialogSolicitud")
    dialog.show()
}

dialogPropio()
//confirms()
//prompts()
