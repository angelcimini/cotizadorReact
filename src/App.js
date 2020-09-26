import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

const ContenedorResumenResultado = styled.div`
  border-color: 1px solid royalblue;
`;

function App() {

  const [resumen, setresumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, setcargando] = useState(false);
  

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario 
          setresumen={setresumen}
          setcargando={setcargando}
        />
        {cargando
        ? <Spinner />
        : null
        }
        
        {
          !cargando
          ? <ContenedorResumenResultado>
            <Resumen 
              datos={datos}
            />
            <Resultado 
              cotizacion={cotizacion}
            />
            </ContenedorResumenResultado>
          : null
        }
      </ContenedorFormulario>    
    </Contenedor>
  );
}

export default App;
