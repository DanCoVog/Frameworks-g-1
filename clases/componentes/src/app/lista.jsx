//creamos definimos un componente para renderizar una una lista de numero 
export default function Lista({ numeros}){
    return(
        <ul>
            {numeros.map((n, i) => (
                <li key={i}>{n}</li>
            ))}
        </ul>
    )
}