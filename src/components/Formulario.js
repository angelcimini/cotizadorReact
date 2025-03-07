import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../Helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #E1E1E1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: royalblue;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    border-radius: 0.5em;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({setresumen, setcargando}) => {

    const [datos, setdatos] = useState({
        marca:'',
        year:'',
        plan:'basico'
    });
    const [error, seterror] = useState(false);

    const {marca, year, plan} = datos;

    const infoForm = e => {
        setdatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = e =>{
        e.preventDefault();
        if( marca.trim() === '' || year.trim() === '' || plan.trim() === '' ) {
            seterror(true);
            return;
        }
        seterror(false);
        let resultado = 2000;
        const diferencia = obtenerDiferenciaYear(year);
        //restar 3% por cada año de diferencia
        resultado -= (( diferencia * 3 ) * resultado) / 100;
        resultado = calcularMarca(marca) * resultado;
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);
        setcargando(true);
        setTimeout(() => {
            setcargando(false);
            setresumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 2000);
    }
    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            {error 
            ? <Error>Todos los campos son obligatorios</Error>
            : null
            }

            <Campo>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={infoForm}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}   
                    onChange={infoForm}             
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={infoForm}
                /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={infoForm}
                /> Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}

Formulario.propTypes = {
    setresumen: PropTypes.func.isRequired,
    setcargando: PropTypes.func.isRequired
}
 
export default Formulario;