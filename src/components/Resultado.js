import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color: darkturquoise;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    color: white;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid royalblue;
    background-color: darkturquoise;
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: white;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {

    return ( 
        (cotizacion === 0)
        ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
        :
        ( 
            <ResultadoCotizacion>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}
                    >
                        <TextoCotizacion>El total es: <span>{cotizacion} €</span></TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        )
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;