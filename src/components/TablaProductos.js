import React from 'react';
import FilaCategoria from './FilaCategoria';

const agruparPorCategoria = (productos) => {
  const categorias = {};
  productos.forEach((producto) => {
    if (!categorias[producto.categoria]) {
      categorias[producto.categoria] = [];
    }
    categorias[producto.categoria].push(producto);
  });
  return categorias;
};
const TablaProductos = ({ productos }) => {
  const categorias = agruparPorCategoria(productos);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(categorias).map((categoria, index) => (
          <React.Fragment key={index}>
            <FilaCategoria categoria={categoria} productos={categorias[categoria]} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;