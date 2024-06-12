import React from 'react';
import TablaProductos from './components/TablaProductos';
import { PRODUCTOS } from './Producto';
import './App.css'; 

const App = () => {
  return (
    <div>
      <h1>Ánima Café</h1>
      <TablaProductos productos={PRODUCTOS} />
    </div>
  );
};

export default App;