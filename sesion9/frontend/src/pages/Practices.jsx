
import { useState } from "react"
import ReactiveForm from "../components/ReactiveForm"
import NonReactiveForm from "../components/NonReactiveForm"

export default function Practices(){

    const [counter, setCounter] = useState(0)

    const incrementCounter = (e)=>{
        //No esta permitido cambiar de forma directa el estado
        //counter = counter + 1
        //Se debe usar el setter
        setCounter((prev => {
            return prev + 1
        }))
    }

    return (
        <>

        El contador es {counter}
        <button onClick={incrementCounter}>Aumentar</button>
        {counter}

        <ReactiveForm></ReactiveForm>
        <NonReactiveForm></NonReactiveForm>
        </>
    )
}