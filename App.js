import React from 'react';
import Notificaciones from './Notificaciones';  // Para notificaciones en tiempo real
import Pagos from './Pagos';  // Para la gestión de pagos y deudas

function App() {
  return (
    <div>
      <h1>Gestión Comunitaria</h1>
      <Notificaciones />  {/* Recibir notificaciones en tiempo real */}
      <Pagos />  {/* Realizar pagos y gestionar deudas */}
    </div>
  );
}

export default App;
