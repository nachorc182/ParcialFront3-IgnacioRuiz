import Card from "./components/Card";
import Form from "./components/Form";
import "./App.css"
import { useState } from "react";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
const [datos,setDatos]= useState()

const handleSubmit = (formData) => {
  setDatos(formData);
};


  return (
    <div className="App">

              <>
              <div className="cards">
                <Form onSubmit={handleSubmit} />
                {datos && <Card nombre={datos.nombre} banda={datos.banda} />}
              </div></>



    </div>

  );
        }





export default App;