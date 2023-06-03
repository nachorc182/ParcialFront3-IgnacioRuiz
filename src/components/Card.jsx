import React from 'react'


const Card = (data) => {
    return (
    <div>
        <h2>Hola {data.nombre}</h2>
        <p>Excelente eleccion!!!</p>
        <button>{data.banda}</button>
    </div>
    )
}


export default Card