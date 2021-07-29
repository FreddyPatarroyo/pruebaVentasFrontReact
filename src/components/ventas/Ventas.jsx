import React, { Fragment } from 'react';

const Ventas = ({venta}) => {
    return ( 
        <Fragment>
            <div className='d-flex justify-content-around mt-2'>
                <h5>{venta.nombre}</h5>
                <h5>${venta.precio}</h5>
            </div>
        </Fragment>

     );
}
 
export default Ventas;