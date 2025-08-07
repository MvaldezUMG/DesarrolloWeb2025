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
setInterval(callback, 3000)

//Solo se ejecuta una vez
setTimeout(callback, 2000)