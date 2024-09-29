import React, { useState, useEffect } from 'react';

// Simulación de datos de residentes con deudas 
const residentesConDeudas = [
  { id: 1, nombre: 'Carlos Pérez', deuda: 150 },
  { id: 2, nombre: 'Lucía Gómez', deuda: 200 },
  { id: 3, nombre: 'Manuel Ramírez', deuda: 100 },
];

function Pagos() {
  const [residentes, setResidentes] = useState([]);
  const [residenteSeleccionado, setResidenteSeleccionado] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos desde una base de datos
    setResidentes(residentesConDeudas);
  }, []);

  const handleSeleccionarResidente = (residente) => {
    setResidenteSeleccionado(residente);
  };

  const simularPago = (residente) => {
    alert(`Simulación: Pago de $${residente.deuda} procesado para ${residente.nombre}`);
        setResidenteSeleccionado(null);
  };

  return (
    <div>
      <h2>Gestión de Deudas y Cuotas Pendientes (Simulación)</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Deuda</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {residentes.map((residente) => (
            <tr key={residente.id}>
              <td>{residente.nombre}</td>
              <td>${residente.deuda}</td>
              <td>
                <button onClick={() => handleSeleccionarResidente(residente)}>
                  Simular Pago
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Si se selecciona un residente, se muestra un mensaje simulando el pago */}
      {residenteSeleccionado && (
        <div>
          <h3>Simular pago para: {residenteSeleccionado.nombre}</h3>
          <p>Deuda actual: ${residenteSeleccionado.deuda}</p>
          <button onClick={() => simularPago(residenteSeleccionado)}>
            Simular Pago de ${residenteSeleccionado.deuda}
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagos;
