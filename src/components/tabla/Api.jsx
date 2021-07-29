import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Datos from './Datos';

const Api = () => {

    const [listaDatos, guardarListaDatos] = useState([])

    useEffect(() => {
    
        const ConsultarApi= async()=>{
        const url = 'https://api.fungenerators.com/name/categories.json?start=0&limit=5'
        const respuesta = await axios(url)
        guardarListaDatos(respuesta.data.contents[0]);
        }

        ConsultarApi()
      }, [])

    return ( 
        <table className="table table-striped table-bordered mt-5">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Titulo Del Nombre</th>
                </tr>
            </thead>
            <tbody>
                {listaDatos.map(info=>(
                    <Datos
                        key={info.name}
                        info={info}
                    />
                ))}
            </tbody>
        </table>
     );
}
 
export default Api;