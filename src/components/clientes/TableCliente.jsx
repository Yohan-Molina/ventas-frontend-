import React, { useState } from 'react';
import RowCliente from './RowCliente';

const TableCliente = () => {

    const [clienteList, setClienteList] = useState([
        {
            "idCliente": 1,
            "nombres": "Yohan",
            "apellidos": "Yohan",
            "dirección": "Yohan",
            "dirección": "Yohan",
            "telefono": "Yohan",
            "email": "Yohan"
        }, 
        {
            "idCliente": 2,
            "nombres": "Molina",
            "apellidos": "Molina",
            "dirección": "Molina",
            "dirección": "Molina",
            "telefono": "Molina",
            "email": "Molina"
        }
    ]);

    return (
        <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Dirección</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clienteList.map(cliente => (
                            <RowCliente cliente={cliente} key={cliente.idCliente}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;