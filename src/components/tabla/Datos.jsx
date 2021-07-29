import React from 'react';

const Datos = ({info}) => {

    const {name, title}=info

    return ( 
        <tr>
            <td>{name}</td>
            <td>{title}</td>
        </tr>
     );
}
 
export default Datos;