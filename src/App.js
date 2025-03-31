import Boton from "./componentes/boton.jsx";
import './App.css';
import Contador from "./componentes/contador.jsx";
import { useState } from "react";

function App() {

  let [clic, setNumClics] = useState(0) 

  const manejarClic = () =>{
    setNumClics(clic + 1) 
  }

  const Reiniciar = () =>{
    setNumClics(clic = 0  )
  }

  return (
    <div className="App">
      <div className="divNumero">
      <Contador clic={clic} />
      </div>
      
      <div className="botones">

        <Boton texto="Contar clic" 
        esBotonDeClic={true} 
        manejarClic ={manejarClic}/>
        
        <Boton texto="Reiniciar" 
        esBotonDeClic={false} 
        manejarClic ={Reiniciar}/>
        
      </div>

    </div>
  );
}

export default App;
