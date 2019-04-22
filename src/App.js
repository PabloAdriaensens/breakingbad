import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';

function App() {

  const [frase, obtenerFrase] = useState({});

  const consultarApi = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //console.log(resultado.data[0]);
    // agregar el resultado e la API al state (similar a this.setState)
    obtenerFrase(resultado.data[0])
  }

  // consulta a una rest api
  useEffect(
    () => {
      consultarApi();
    }, []
  )

  console.log(frase); // frase = this.state;

  return <p> hola </p>
}

export default App;