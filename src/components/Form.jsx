import { useState } from "react";


const Form=({onSubmit}) => {

    const [nombre, setNombre] = useState("");

    const [banda, setBanda] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (x) => {

    x.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setError('El nombre no puede ser menor a 3 caracteres ni tener espacios en blanco');
      return;
    }

    if (banda.length < 3) {
      setError('La banda no puede tener menos de 3 caracteres ni tener espacios en blanco');
      return;
    }

    onSubmit({ nombre, banda });
    setError('');
    setNombre('');
    setBanda('');
  };

    return (


    <div>
        <form className = "form-container" onSubmit={handleSubmit}>
            <div>

                <h1>La mejor banda del mundo segun vos!</h1>
                <label>Tu nombre</label>
                <input type="text" placeholder="" value={nombre} onChange={(x) => {
                    setNombre(x.target.value);
                    }}/>


                <label>Tu banda favorita</label>
                <input type="text" value={banda} placeholder="" onChange={(x) => {
                  setBanda(x.target.value)
                }}/>


                <button type="submit">Enviar</button>
            </div>
            {error && <p>{error}</p>}
        </form>

    </div>
    )
            }





export default Form;