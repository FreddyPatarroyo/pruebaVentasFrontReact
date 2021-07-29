import React,{useState} from 'react';
import styled from '@emotion/styled';

const Imagen=styled.img`
    height: 150px;
    overflow: hidden;
`;

const ContenedorBoton=styled.div`
    display: flex;
    justify-content: center;
`;

const Productos = ({producto, guardarVentas, ventas}) => {


    const agregarCompra=()=>{
        guardarVentas([...ventas, producto]);
    }

    return (
        <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className="card mt-5">
            <Imagen src={producto.imagen} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h2 className="card-title text-center">{producto.nombre}</h2>
                <h4 className="card-title text-center">$ {producto.precio}</h4>
                <ContenedorBoton>
                    <button className='btn btn-primary w-100 btn-lg mt-3' onClick={agregarCompra}>Comprar</button>
                </ContenedorBoton>
            </div>
            </div>
        </div> 
        
     );
}
 
export default Productos;