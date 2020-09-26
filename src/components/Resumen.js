import React from 'react';
import styled from '@emotion/styled';
import {firstUp} from '../Helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: darkturquoise;
    color: white;
    margin-top: 1rem;
    font-weight: bold;
`;

const Resumen = ({datos}) => {
    
    const { marca, year, plan } = datos;

    if(marca === '' || year === '' || plan === '' ) return null;
    
    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {firstUp(marca)} </li>
                <li>Año: {firstUp(year)} </li>
                <li>Plan: {firstUp(plan)} </li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;