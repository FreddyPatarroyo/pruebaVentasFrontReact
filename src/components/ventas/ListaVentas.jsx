import React from 'react';
import Ventas from './Ventas';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

const Contenedor=styled.div`
    height: 400px;
    overflow: auto;
`;

const ListaVentas = ({ventas}) => {
    if(ventas.length===0){
        return(
            <h2 className='text-center alert alert-info'>Todavia No Hay Ventas</h2>
        )
    }
    return ( 
        <Contenedor className='mt-4 mb-5'>
            {ventas.map(venta=>(
                <Ventas
                    key={venta.id+uuidv4()}
                    venta={venta}
                />
            ))}
        </Contenedor>
     );
}
 
export default ListaVentas;