import React, { Fragment,useState,useEffect } from 'react';
import Header from './components/ventas/Header';
import ListaProductos from './components/ventas/ListaProductos';
import ListaVentas from './components/ventas/ListaVentas';
import CantidadDeVentas from './components/ventas/CantidadDeVentas';
import Api from './components/tabla/Api';

function App() {

  const [ventas, guardarVentas] = useState([]);
  const [cantidadVentas, guardarCantidadVentas] = useState(0);
  const [cambioVista, guardarCambioVista] = useState(false);

  useEffect(() => {
    guardarCantidadVentas(ventas.length)
    console.log(cantidadVentas);
  }, [ventas])

  const cambiarVistaTienda=()=>{
    guardarCambioVista(false)
  }

  const cambiarTabla=()=>{
    guardarCambioVista(true)
  }

  return (
    <Fragment>
      {cambioVista
        ?
        <Header
        title='Tabla'
        />
        :
        <Header
        title='Tienda Virtual'
        />
      }

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-6'> 
            <button
              className='btn btn-primary w-100'
              onClick={cambiarVistaTienda}
            >Tienda</button>
          </div>
          <div className='col-md-6'>     
            <button
              className='btn btn-danger w-100'
              onClick={cambiarTabla}
            >Tabla</button>
          </div>

        </div> 
      </div>
      {cambioVista
        ?
        <div className='container'>
          <Api
          />
        </div>

        :
        <div className='container'>
          <div className='row'>
            <ListaProductos
              guardarVentas={guardarVentas}
              ventas={ventas}
              guardarCantidadVentas={guardarCantidadVentas}
            />
          </div>
          <div className='row mt-5'>
            <div className='col-sm-12 col-md-6'>
              <h1 className='text-center'>Ventas</h1>
              <ListaVentas
                ventas={ventas}
              />
            </div>
            <div className='col-sm-12 col-md-6'>
              <h1 className='text-center'>Cantidad De Ventas</h1>
              <CantidadDeVentas
                cantidadVentas={cantidadVentas}
              />
            </div>
          </div>
        </div>
      }

    </Fragment>
    
  );
}

export default App;
