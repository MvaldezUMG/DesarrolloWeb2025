
export default function MyInput({label}) {
    return (
        <>
            <label>{label}</label>
            <input></input>
        </>
    )
}

export function Otro({children}){
    return(
        <>
        <h1>Otro</h1>
        {children}
        </>
    )
}
export function Otro2(){
    return(
        <><h5>Otro 2</h5></>
    )
}