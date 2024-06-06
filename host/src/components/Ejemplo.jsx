import React from 'react';
import ErrorBoundary from 'utilities/ErrorBoundary';
import Hello from 'utilities/Hello';
// import apiService from 'utilities/apiService';
// import eventBus from 'utilities/eventBus';
import 'utilities/styles';

// import funcion from 'utilities/funcion';

const Ejemplo = () => {

  // React.useEffect(() => {
  //   // Cargar el módulo federado dinámicamente
  //   import('utilities/funcion').then(({ default: addNumbers }) => {
  //     console.log(addNumbers(2, 3));
  //   }).catch((error) => {
  //     console.error('Error al cargar el módulo federado:', error);
  //   });
  // }, []);

  // Usa apiService para consumir servicios
//   apiService.get('/api/data').then(response => {
//     console.log(response.data);
//   });

  // Usa eventBus para comunicarte entre microfrontends
//   eventBus.emit('someEvent', { data: 'some data' });

  return (
    <>
      <div className="app">
        <h1>Mi Aplicación con Módulos Federados</h1>
      </div>

      <ErrorBoundary>
        <Hello/>
      </ErrorBoundary>
    </>
  );
};

export default Ejemplo;
