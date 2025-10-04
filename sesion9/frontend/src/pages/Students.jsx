import { useEffect } from "react"
import { BASE_API_URL } from "../general/config"
import { useState } from "react"
import { useRef } from "react"

export default function Students(){
    const dialogRef = useRef(null)
    const [students,setStudents]= useState([])

    useEffect(()=>{
        //Esto se ejecuta al carga el componente Students.
        
        (async ()=>{   
            const students = await getData()
            setStudents(students)
            
        })()
    },[])
    
    const getData = async () =>{
        const fetchResult = await fetch(BASE_API_URL + "/student")
        const data = await fetchResult.json()
        return data
    }

    const newClick = (e)=>{
        dialogRef.current.show()
    }

    const newStudentSubmit = (e)=>{
        
    }

    return (<>
       <button onClick={newClick}>Nuevo estudiante</button>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Codigo</th>
                    <th>Carrera</th>
                </tr>
            </thead>
            <tbody>
                {students.map(s => (
                    <tr>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.code}</td>
                        <td>{s.career}</td>
                    </tr>            
                ))}
            </tbody>
        
        </table>

        <dialog className="dialog" ref={dialogRef}>
            <h4>Nuevo estudiante</h4>
            <form onSubmit={newStudentSubmit}>
                <label for="name">Nombre</label>
                <input name="name" id="name"/>
                <label for="code">Carnet</label>
                <input name="code" id="code"/>
                <label for="career">Carrera</label>
                <input name="career" id="code"/>
                <input type="submit" value="Guardar"/>
            </form>
            <button onClick={()=> {dialogRef.current.close()}}>Cerrar</button>
        </dialog>
    </>)
}