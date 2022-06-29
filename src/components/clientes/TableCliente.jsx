import React from 'react';

const TableCliente = () => {
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
                    <tr>
                        <td>Yohan</td>
                        <td>Yohan</td>
                        <td>Yohan</td>
                        <td>Yohan</td>
                        <td>Yohan</td>
                        <td>
                            <button className='button is-small is-info mr-1' title='Modificar'>
                                <span className="icon is-small">
                                    <i className="fas fa-edit"></i>
                                </span>
                            </button>
                            <button className='button is-small is-danger' title='Eliminar'>
                                <span className="icon is-small">
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;