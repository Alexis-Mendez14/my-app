import React from 'react';
import FilaProducto from './FilaProducto';
const FilaCategoria = ({ categoria, productos }) => {
  return (
    <>
      <tr>
        <td colSpan="3"><h2>{categoria}</h2></td>
      </tr>
      {productos.map((producto, index) => (
        <FilaProducto key={index} producto={producto} />
      ))}
    </>
  );
};

export default FilaCategoria;