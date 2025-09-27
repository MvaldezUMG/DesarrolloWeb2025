import { use, useState } from "react"

export default function NonReactiveForm(){
        
    const onFormSubmit = (e)=>{
        e.preventDefault()
        
        const values = new FormData(e.target)
        
        const nombre = values.get("name")
        const birth = values.get("dateOfBirth")
        const subject = values.get("subject")
        console.log(nombre, birth, subject)

        //e.target.submit()
    }

    return (
        <form onSubmit={onFormSubmit} method="POST">
            <h3>Formulario no reactivo </h3>
            <label>Nombre</label>
            {/* <small style={{color:"red"}}>{ validation.name ? "" : "El campo es invalido"}</small> <br/> */}
            <input type="text" name="name" ></input><br/>

            <label>Fecha nacimiento</label>
            {/* <small style={{color:"red"}}>{ validation.dateOfBirth ? "" : "El campo es invalido"}</small> <br/>*/}
            <input type="date" name="dateOfBirth" ></input><br/> 

            <label>Curso</label>
            {/* <small style={{color:"red"}}>{ validation.subject ? "" : "El campo es invalido"}</small><br/> */}
            <input type="text" name="subject"></input><br/>

            <button type="submit">Guardar</button>
            
        </form>
    )
}