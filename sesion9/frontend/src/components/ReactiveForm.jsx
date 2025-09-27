import { use, useState } from "react"

export default function ReactiveForm(){
    
    const [student, setStudent] = useState({
        name: "",
        dateOfBirth: "",
        subject: ""
    })

    const [validation, setValidation] = useState({
        name: false,
        dateOfBirth: false,
        subject: false
    })

    const studentChanged = (e)=>{

        setValidation({
            ...validation,
            [e.target.name] : e.target.value !== ""
        })

        setStudent({
            ...student,
            [e.target.name] : e.target.value
        })
    }
    
    const onFormSubmit = (e)=>{
        e.preventDefault()
        if (!validation.name || !validation.dateOfBirth || !validation.subject){
            alert("Los datos no son validos")
            return
        }
        e.target.submit()
    }

    return (
        <form onSubmit={onFormSubmit} method="POST">
            <label>Nombre</label>
            <small style={{color:"red"}}>{ validation.name ? "" : "El campo es invalido"}</small> <br/>
            <input type="text" name="name" onChange={studentChanged} value={student.name} ></input><br/>

            <label>Fecha nacimiento</label>
            <small style={{color:"red"}}>{ validation.dateOfBirth ? "" : "El campo es invalido"}</small> <br/>
            <input type="date" name="dateOfBirth" onChange={studentChanged} value={student.dateOfBirth} ></input><br/>

            <label>Curso</label>
            <small style={{color:"red"}}>{ validation.subject ? "" : "El campo es invalido"}</small><br/>
            <input type="text" name="subject" onChange={studentChanged} value={student.subject}></input><br/>

            <button type="submit">Guardar</button>
            {JSON.stringify(student)}
        </form>
    )
}