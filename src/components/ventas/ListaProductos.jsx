import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Productos from './Productos';

const ListaProductos = ({guardarVentas, guardarCantidadVentas, ventas}) => {

    const [listaProductos, guardarListaProductoss] = useState([
        {id:uuidv4(),imagen:'https://www.clikisalud.net/wp-content/uploads/2021/01/vida-util-arroz-seco-crudo.jpg',nombre:'Arroz',precio:3000},
        {id:uuidv4(),imagen:'https://www.agrobio.org/wp-content/uploads/2014/12/art_imgart-1026.jpg',nombre:'Papa',precio:4000},
        {id:uuidv4(),imagen:'https://www.rubendario.cl/sitio/wp-content/uploads/2014/07/lechuga.png',nombre:'Lechuga',precio:2000},
        {id:uuidv4(),imagen:'https://www.cuerpomente.com/medio/2020/10/21/zanahoria_af4f505e_1200x1200.jpg',nombre:'Zanahoria',precio:2500},
        {id:uuidv4(),imagen:'https://estaticos.miarevista.es/media/cache/1000x590_thumb/uploads/images/gallery/59144d795cafe812663c986a/razonescomermanzana-int.jpg',nombre:'Manzana',precio:1500},
        {id:uuidv4(),imagen:'https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59799f115bafe8f88e3c989a/kiwi-int.jpg',nombre:'Kiwi',precio:2000},
        {id:uuidv4(),imagen:'https://static2.abc.es/media/bienestar/2020/11/06/naranja-kOMF--620x349@abc.jpg',nombre:'Naranja',precio:2300},
        {id:uuidv4(),imagen:'https://www.evok.com.co/wp-content/uploads/2016/08/evok-mora-destacada.jpg',nombre:'Mora',precio:1300}
    ])

    return ( 
        <div className='row'>
            {listaProductos.map(producto=>(
                <Productos
                    key={producto.id}
                    producto={producto}
                    guardarVentas={guardarVentas}
                    ventas={ventas}
                    guardarCantidadVentas={guardarCantidadVentas}
                />
            ))}
        </div>
     );
}
 
export default ListaProductos;